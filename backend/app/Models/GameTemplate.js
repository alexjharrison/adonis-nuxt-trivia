"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");
const Round = use("Round");
const GameInstance = use("GameInstance");

class GameTemplate extends Model {
  gameInstances() {
    return this.hasMany(GameInstance);
  }

  rounds() {
    return this.hasMany(Round);
  }
}

module.exports = GameTemplate;
