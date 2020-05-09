"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Question extends Model {
  questionSet() {
    return this.belongsTo("QuestionSet");
  }

  answers() {
    return this.hasMany("Answer");
  }
}

module.exports = Question;
