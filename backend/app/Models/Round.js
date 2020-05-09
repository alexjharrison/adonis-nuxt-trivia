"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Round extends Model {
  questionSets() {
    return this.hasMany("QuestionSet");
  }

  gameTemplate() {
    return this.belongsTo("GameTemplate");
  }

  points() {
    return this.hasMany("Point");
  }
}

module.exports = Round;
