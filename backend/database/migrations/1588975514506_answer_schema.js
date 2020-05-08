"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class AnswerSchema extends Schema {
  up() {
    this.create("answers", (table) => {
      table.increments();
      table.integer("max_points").unsigned();
      table.integer("min_points").unsigned();
      table.string("answer_text").notNullable();
      table.integer("answer_number").unsigned().notNullable();
      table.boolean("will_deduct").defaultsTo(false);
      table
        .integer("question_id")
        .unsigned()
        .references("id")
        .inTable("questions");
      table.timestamps();
    });
  }

  down() {
    this.drop("answers");
  }
}

module.exports = AnswerSchema;
