"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");
const User = use("App/Models/User");

class UserSchema extends Schema {
  up() {
    this.create("users", (table) => {
      table.increments();
      table.string("username", 80).notNullable().unique();
      table.string("email", 254).notNullable().unique();
      table.string("password", 60).notNullable();
      table.timestamps();
    });

    User.create({
      username: "alex",
      email: "alex@alex.alex",
      password: "alex",
    });
  }

  down() {
    this.drop("users");
  }
}

module.exports = UserSchema;
