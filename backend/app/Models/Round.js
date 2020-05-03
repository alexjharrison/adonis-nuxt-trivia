"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Round extends Model {
  set() {
    return this.belongsTo("App/Models/Set");
  }

  points() {
    return this.hasMany("App/Models/Point");
  }

  answers() {
    return this.hasMany("App/Models/Answer");
  }

  questions() {
    return this.hasMany("App/Models/Question");
  }
}

module.exports = Round;
