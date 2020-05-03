'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GameTeamSchema extends Schema {
  up () {
    this.create('game_team', (table) => {
      table.increments()
      table.integer('score').unsigned()
      table.integer('game_id').unsigned().references('id').inTable('games')
      table.integer('team_id').unsigned().references('id').inTable('teams')
      table.timestamps()
    })
  }

  down () {
    this.drop('game_team')
  }
}

module.exports = GameTeamSchema
