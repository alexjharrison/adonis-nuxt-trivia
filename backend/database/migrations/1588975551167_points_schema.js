"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class PointsSchema extends Schema {
  up() {
    this.create("points", (table) => {
      table.increments();
      table.integer("value").unsigned().notNullable();
      table
        .integer("round_teams_id")
        .unsigned()
        .references("id")
        .inTable("round_teams");
      table.timestamps();
    });
  }

  down() {
    this.drop("points");
  }
}

module.exports = PointsSchema;
