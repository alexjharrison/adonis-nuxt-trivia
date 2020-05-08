"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ImageSchema extends Schema {
  up() {
    this.create("images", (table) => {
      table.increments();
      table.string("file_name").notNullable();
      table.string("file_extension").notNullable();
      table.string("url").notNullable();
      table.float("file_size").notNullable();
      table.boolean("shows_on_question").notNullable();
      table
        .integer("question_set_id")
        .unsigned()
        .references("id")
        .inTable("question_sets");
      table.timestamps();
    });
  }

  down() {
    this.drop("images");
  }
}

module.exports = ImageSchema;
