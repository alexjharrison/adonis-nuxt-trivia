"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");
const Question = use("Question");
const Team = use("Team");

class Answer extends Model {
  teams() {
    return this.belongsToMany(Team);
  }

  question() {
    return this.belongsTo(Question);
  }
}

module.exports = Answer;
