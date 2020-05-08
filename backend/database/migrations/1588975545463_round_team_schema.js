'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RoundTeamSchema extends Schema {
  up () {
    this.create('round_teams', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('round_teams')
  }
}

module.exports = RoundTeamSchema
