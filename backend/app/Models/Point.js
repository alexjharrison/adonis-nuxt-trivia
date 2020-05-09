"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Point extends Model {
  round() {
    return this.belongsTo("Round");
  }

  team() {
    return this.belongsTo("Team");
  }
}

module.exports = Point;
