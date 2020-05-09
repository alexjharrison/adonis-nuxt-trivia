"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class GameInstanceSchema extends Schema {
  up() {
    this.create("game_instances", (table) => {
      table.increments();
      table
        .integer("game_template_id")
        .unsigned()
        .references("id")
        .inTable("game_templates");
      table.integer("user_id").unsigned().references("id").inTable("users");
      table.timestamps();
    });
  }

  down() {
    this.drop("game_instances");
  }
}

module.exports = GameInstanceSchema;
