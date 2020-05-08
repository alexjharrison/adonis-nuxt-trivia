"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class GameInstanceTeamSchema extends Schema {
  up() {
    this.create("game_instance_teams", (table) => {
      table.increments();
      table.integer("team_id").unsigned().references("id").inTable("teams");
      table
        .integer("game_instance_id")
        .unsigned()
        .references("id")
        .inTable("game_instances");
      table.timestamps();
    });
  }

  down() {
    this.drop("game_instance_teams");
  }
}

module.exports = GameInstanceTeamSchema;
