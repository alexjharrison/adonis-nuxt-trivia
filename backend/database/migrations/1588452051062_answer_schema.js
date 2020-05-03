'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AnswerSchema extends Schema {
  up () {
    this.create('answers', (table) => {
      table.increments()
      table.integer('round_id').unsigned().references('id').inTable('rounds')
      table.timestamps()
    })
  }

  down () {
    this.drop('answers')
  }
}

module.exports = AnswerSchema
