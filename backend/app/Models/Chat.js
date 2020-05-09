"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Chat extends Model {
  chatMessages() {
    return this.hasMany("ChatMessage");
  }

  team() {
    return this.belongsTo("Team");
  }
}

module.exports = Chat;
