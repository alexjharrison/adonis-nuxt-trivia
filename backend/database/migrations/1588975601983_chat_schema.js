"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ChatSchema extends Schema {
  up() {
    this.create("chats", (table) => {
      table.increments();
      table.string("name").notNullable();
      table.integer("team_id").unsigned().references("id").inTable("teams");
      table.timestamps();
    });
  }

  down() {
    this.drop("chats");
  }
}

module.exports = ChatSchema;
