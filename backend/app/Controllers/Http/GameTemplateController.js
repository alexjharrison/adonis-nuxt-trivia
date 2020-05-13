"use strict";

class GameTemplateController {
  User = use("User");
  GameTemplate = use("GameTemplate");
  Round = use("Round");
  QuestionSet = use("QuestionSet");
  Question = use("Question");
  Answer = use("Answer");
  questionNumber = 1;

  // get all
  async index({ auth }) {
    if (auth.user.is_admin) {
      return this.GameTemplate.query().fetch();
    } else
      return this.GameTemplate.query().where("user_id", auth.user.id).fetch();
  }

  // get one
  async show({ params, auth }) {
    return this.GameTemplate.query()
      .with("rounds.questionSets.questions.answers")
      .where("id", params.id)
      .where("user_id", auth.user.id)
      .fetch();
  }

  // patch one
  async update({ request, params }) {
    const { name, rounds } = request.body;
    if (name) {
      await this.GameTemplate.query().where("id", params.id).update({ name });
      rounds.map(async (round, i) => {
        const { id, type } = round;
        await this.Round.query()
          .where("id", id)
          .update({ type, round_number: i + 1 });
        round.questionSets.map(async (questionSet) => {
          const { category, id } = questionSet;
          await this.QuestionSet.query().where("id", id).update({ category });
          questionSet.questions.map(async (question, i) => {
            const { id, question_text } = question;
            await this.Question.query()
              .where("id", id)
              .update({ question_text, question_number: i + 1 });
            question.answers.map(async (answer, i) => {
              const {
                id,
                max_points,
                min_points,
                answer_text,
                will_deduct,
              } = answer;
              await this.Answer.query()
                .where("id", id)
                .update({
                  max_points,
                  min_points,
                  answer_text,
                  will_deduct,
                  answer_number: i + 1,
                });
            });
          });
        });
      });
    }

    return true;
  }

  // post one
  async store({ request, auth }) {
    const user = await this.User.find(auth.user.id);
    const { name, rounds } = request.body;

    const gameTemplate = await user.gameTemplates().create({
      name,
    });

    rounds.map(async (round, i) => {
      const roundModel = await gameTemplate.rounds().create({
        type: round.type,
        round_number: i + 1,
      });

      round.questionSets.map(async (questionSet) => {
        const questionSetModel = await roundModel.questionSets().create({
          category: questionSet.category,
          question_number: this.questionNumber++,
        });

        questionSet.questions.map(async (question, i) => {
          const questionModel = await questionSetModel.questions().create({
            question_text: question.question_text,
            question_number: i + 1,
          });

          question.answers.map(async (answer, i) => {
            await questionModel.answers().create({
              max_points: answer.max_points,
              min_points: answer.min_points,
              answer_text: answer.answer_text,
              will_deduct: answer.will_deduct,
              answer_number: i + 1,
            });
          });
        });
      });
    });

    return this.GameTemplate.query()
      .where("id", gameTemplate.id)
      .with("rounds.questionSets.questions.answers")
      .fetch();
  }

  // delete one
  async destroy({ params }) {
    const gameTemplate = await this.GameTemplate.findOrFail(params.id);
    await gameTemplate.delete();
    return gameTemplate;
  }
}

module.exports = GameTemplateController;
