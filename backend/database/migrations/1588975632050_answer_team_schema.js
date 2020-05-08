"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class AnswerTeamSchema extends Schema {
  up() {
    this.create("answer_teams", (table) => {
      table.increments();
      table.integer("team_id").unsigned().references("id").inTable("teams");
      table.integer("answer_id").unsigned().references("id").inTable("answers");
      table.boolean("is_correct").notNullable();
      table.integer("points_earned").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("answer_teams");
  }
}

module.exports = AnswerTeamSchema;
