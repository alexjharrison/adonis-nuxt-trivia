"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class GameTemplate extends Model {
  static async createTemplate(body, user) {
    const User = use("User");
    const me = new User();
    me.username = "alex";
    me.password = "jfdklasjfkldasjlf";
    me.email = "a@a.a";
    console.log(me);
    // const templates = await me.gameTemplates();
    // console.log(templates);
    return user;
  }

  gameInstances() {
    return this.hasMany("GameInstance");
  }

  rounds() {
    return this.hasMany("Round");
  }

  createdBy() {
    return this.belongsTo("User");
  }
}

module.exports = GameTemplate;
