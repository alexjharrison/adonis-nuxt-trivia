'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TeamUserSchema extends Schema {
  up () {
    this.create('team_user', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.integer('team_id').unsigned().references('id').inTable('teams')
      table.timestamps()
    })
  }

  down () {
    this.drop('team_user')
  }
}

module.exports = TeamUserSchema
