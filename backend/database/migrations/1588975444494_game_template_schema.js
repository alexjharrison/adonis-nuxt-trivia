"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class GameTemplateSchema extends Schema {
  up() {
    this.create("game_templates", (table) => {
      table.increments();
      table.string("name").notNullable();
      table.integer("user_id").unsigned().references("id").inTable("users");
      table.timestamps();
    });
  }

  down() {
    this.drop("game_templates");
  }
}

module.exports = GameTemplateSchema;
