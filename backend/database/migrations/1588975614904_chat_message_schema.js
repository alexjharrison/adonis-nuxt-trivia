"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ChatMessageSchema extends Schema {
  up() {
    this.create("chat_messages", (table) => {
      table.increments();
      table.string("text").notNullable();
      table.integer("created_by").unsigned().references("id").inTable("users");
      table.integer("chat_id").unsigned().references("id").inTable("chats");
      table.timestamps();
    });
  }

  down() {
    this.drop("chat_messages");
  }
}

module.exports = ChatMessageSchema;
