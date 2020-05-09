"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");
const Point = use("Point");
const QuestionSet = use("QuestionSet");
const GameTemplate = use("GameTemplate");

class Round extends Model {
  questionSets() {
    return this.hasMany(QuestionSet);
  }

  gameTemplate() {
    return this.belongsTo(GameTemplate);
  }

  points() {
    return this.hasMany(Point);
  }
}

module.exports = Round;
