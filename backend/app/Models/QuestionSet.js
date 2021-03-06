"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class QuestionSet extends Model {
  questions() {
    return this.hasMany("Question");
  }

  images() {
    return this.hasMany("Image");
  }

  round() {
    return this.belongsTo("Round");
  }
}

module.exports = QuestionSet;
