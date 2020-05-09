"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");
const QuestionSet = use("QuestionSet");

class Image extends Model {
  questionSet() {
    return this.belongsTo(QuestionSet);
  }
}

module.exports = Image;
