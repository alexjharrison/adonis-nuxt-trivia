"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class RoundTeamSchema extends Schema {
  up() {
    this.create("round_teams", (table) => {
      table.increments();
      table.integer("round_id").unsigned().references("id").inTable("rounds");
      table.integer("team_id").unsigned().references("id").inTable("teams");
      table.timestamps();
    });
  }

  down() {
    this.drop("round_teams");
  }
}

module.exports = RoundTeamSchema;
