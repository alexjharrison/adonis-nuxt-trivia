"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class QuestionSchema extends Schema {
  up() {
    this.create("questions", (table) => {
      table.increments();
      table.string("question_text").notNullable();
      table.integer("question_number").unsigned().notNullable();
      table
        .integer("question_set_id")
        .unsigned()
        .references("id")
        .inTable("question_sets")
        .onDelete("cascade");
      table.timestamps();
    });
  }

  down() {
    this.drop("questions");
  }
}

module.exports = QuestionSchema;
