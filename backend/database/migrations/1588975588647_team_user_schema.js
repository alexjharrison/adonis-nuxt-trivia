"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class TeamUserSchema extends Schema {
  up() {
    this.create("team_users", (table) => {
      table.increments();
      table.integer("team_id").unsigned().references("id").inTable("teams");
      table.integer("user_id").unsigned().references("id").inTable("users");
      table.timestamps();
    });
  }

  down() {
    this.drop("team_users");
  }
}

module.exports = TeamUserSchema;
