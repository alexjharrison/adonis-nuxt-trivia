"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");
const Round = use("App/Models/Round");

class Set extends Model {
  async createSet(rounds) {
    for (const round of rounds) {
      const newRound = await Round.create(round);
      this.rounds().attach(newRound);
    }
  }

  rounds() {
    return this.hasMany("App/Models/Round");
  }
}

module.exports = Set;
