"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");
const Chat = use("Chat");
const User = use("User");

class ChatMessage extends Model {
  chat() {
    return this.belongsTo(Chat);
  }

  createdBy() {
    return this.belongsTo(User);
  }
}

module.exports = ChatMessage;
