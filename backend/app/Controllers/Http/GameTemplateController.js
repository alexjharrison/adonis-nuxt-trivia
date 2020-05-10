"use strict";

class GameTemplateController {
  User = use("User");
  GameTemplate = use("GameTemplate");
  Round = use("Round");
  QuestionSet = use("QuestionSet");
  Question = use("Question");
  questionNumber = 1;

  // get all
  async index({ request }) {
    return "index";
  }

  // get one
  async show({ request }) {
    return "show";
  }

  // patch one
  async update({ request }) {
    return "update";
  }

  // post one
  async store({ request, auth }) {
    const user = await this.User.find(auth.user.id);
    const { name, rounds } = request.body;

    const gameTemplate = new this.GameTemplate();
    gameTemplate.name = name;
    await user.gameTemplates().save(gameTemplate);

    const newRounds = await this.createRounds(rounds);
    await gameTemplate.rounds().saveMany(newRounds);

    return this.GameTemplate.query()
      .where("id", gameTemplate.id)
      .with("rounds.questionSets")
      .fetch();
  }

  // delete one
  async destroy({ request }) {
    return "destroy";
  }

  createRounds(rounds) {
    return Promise.all(
      rounds.map(async (round, i) => {
        const newRound = new this.Round();
        newRound.type = round.type;
        newRound.round_number = i + 1;
        if (newRound.imageIds && newRound.imageIds.length > 0)
          await newRound.photos().attach(newRound.imageIds);

        const questionSets = await this.createQuestionSets(round.questionSets);
        await newRound.questionSets().saveMany(questionSets);
        return newRound;
      })
    );
  }
  createQuestionSets(questionSets) {
    return Promise.all(
      questionSets.map(async (questionSet, i) => {
        const newQuestionSet = new this.QuestionSet();
        newQuestionSet.category = questionSet.category;
        newQuestionSet.question_number = this.questionNumber++;

        const questions = await this.createQuestions(questionSet.questions);
        console.log(questions);
        await newQuestionSet.questions().saveMany(questions);
        return newQuestionSet;
      })
    );
  }
  createQuestions(questions) {
    return Promise.all(
      questions.map(async (question, i) => {
        const newQuestion = new this.Question();
        newQuestion.question_text = question.questionText;
        newQuestion.question_number = i + 1;

        // const answers = await this.createAnswers(question.answers);
        // await question.answers().saveMany(answers);
        return newQuestion;
      })
    );
  }
  createAnswers(answers) {}
}

module.exports = GameTemplateController;
