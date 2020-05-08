'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TeamUserSchema extends Schema {
  up () {
    this.create('team_users', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('team_users')
  }
}

module.exports = TeamUserSchema
