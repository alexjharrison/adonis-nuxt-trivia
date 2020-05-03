"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Answer extends Model {
  question() {
    return this.belongsTo("App/Models/Question");
  }

  round() {
    return this.belongsTo("App/Models/Round");
  }

  image() {
    return this.hasOne("App/Models/Image");
  }
}

module.exports = Answer;