"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class QuestionSetSchema extends Schema {
  up() {
    this.create("question_sets", (table) => {
      table.increments();
      table.integer("question_number").unsigned().notNullable();
      table.integer("round_id").unsigned().references("id").inTable("rounds");
      table.string("category").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("question_sets");
  }
}

module.exports = QuestionSetSchema;
