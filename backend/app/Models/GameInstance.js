"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");
const Team = use("Team");
const GameTemplate = use("GameTempate");
const User = use("User");

class GameInstance extends Model {
  createdBy() {
    return this.belongsTo(User);
  }

  gameTemplate() {
    return this.belongsTo(GameTemplate);
  }

  teams() {
    return this.belongsToMany(Team);
  }
}

module.exports = GameInstance;
