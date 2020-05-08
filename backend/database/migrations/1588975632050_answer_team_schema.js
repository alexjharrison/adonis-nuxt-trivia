'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AnswerTeamSchema extends Schema {
  up () {
    this.create('answer_teams', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('answer_teams')
  }
}

module.exports = AnswerTeamSchema
