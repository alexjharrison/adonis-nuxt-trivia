"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class RoundSchema extends Schema {
  up() {
    this.create("rounds", (table) => {
      table.increments();
      table.enu("type", ["standard", "pick_a_point", "list", "wager", "multi"]);
      table
        .integer("game_template_id")
        .unsigned()
        .references("id")
        .inTable("game_templates")
        .onDelete("cascade");
      table.integer("round_number").unsigned().notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("rounds");
  }
}

module.exports = RoundSchema;
