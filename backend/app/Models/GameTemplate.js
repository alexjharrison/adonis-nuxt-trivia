"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class GameTemplate extends Model {
  gameInstances() {
    return this.hasMany("GameInstance");
  }

  rounds() {
    return this.hasMany("Round");
  }

  createdBy() {
    return this.belongsTo("User");
  }
}

module.exports = GameTemplate;
