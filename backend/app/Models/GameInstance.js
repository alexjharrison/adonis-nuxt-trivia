"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class GameInstance extends Model {
  host() {
    return this.belongsTo("User");
  }

  gameTemplate() {
    return this.belongsTo("GameTemplate");
  }

  teams() {
    return this.belongsToMany("Team");
  }
}

module.exports = GameInstance;
