"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class PointsSchema extends Schema {
  up() {
    this.create("points", (table) => {
      table.increments();
      table.integer("value").unsigned().notNullable();
      table.integer("round_id").unsigned().references("id").inTable("rounds");
      table.integer("team_id").unsigned().references("id").inTable("teams");
      table.timestamps();
    });
  }

  down() {
    this.drop("points");
  }
}

module.exports = PointsSchema;
