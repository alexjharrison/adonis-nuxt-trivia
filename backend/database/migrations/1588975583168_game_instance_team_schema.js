'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GameInstanceTeamSchema extends Schema {
  up () {
    this.create('game_instance_teams', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('game_instance_teams')
  }
}

module.exports = GameInstanceTeamSchema
