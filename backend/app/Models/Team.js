"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");
const User = use("User");
const Chat = use("Chat");
const GameInstance = use("GameInstance");
const Point = use("Point");

class Team extends Model {
  users() {
    return this.belongsToMany(User);
  }

  chat() {
    return this.hasOne(Chat);
  }

  gameInstance() {
    return this.belongsToMany(GameInstance);
  }

  points() {
    return this.hasMany(Point);
  }
}

module.exports = Team;
