"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");
const User = use("App/Models/User");

class UserSchema extends Schema {
  up() {
    this.create("users", (table) => {
      table.increments();
      table.boolean("is_admin").notNullable().defaultsTo(false);
      table.string("username", 80).notNullable();
      table.string("email", 254).notNullable().unique();
      table.string("password", 60).notNullable();
      table.timestamps();
    });

    User.create({
      username: "alex",
      email: "alex@alex.alex",
      password: "alex",
      is_admin: true,
    });
  }

  down() {
    this.drop("users");
  }
}

module.exports = UserSchema;
