"use strict";

class GameTemplateController {
  User = use("User");
  GameTemplate = use("GameTemplate");
  Round = use("Round");
  QuestionSet = use("QuestionSet");
  Question = use("Question");
  questionNumber = 1;

  // get all
  async index() {
    return this.GameTemplate.query()
      .with("rounds.questionSets.questions.answers")
      .fetch();
  }

  // get one
  async show({ params }) {
    return this.GameTemplate.query()
      .with("rounds.questionSets.questions.answers")
      .where("id", params.id)
      .fetch();
  }

  // patch one
  async update({ request, params }) {
    const template = await this.GameTemplate.with(
      "rounds.questionSets.questions.answers"
    )
      .where("id", params.id)
      .fetch()
      .toJSON();
    console.log(template);
    return template;
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
            question_text: question.questionText,
            question_number: i + 1,
          });

          question.answers.map(async (answer, i) => {
            await questionModel.answers().create({
              max_points: answer.maxPoints,
              min_points: answer.minPoints,
              answer_text: answer.answerText,
              will_deduct: answer.willDeduct,
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
