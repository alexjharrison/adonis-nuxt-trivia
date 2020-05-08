'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class QuestionSetSchema extends Schema {
  up () {
    this.create('question_sets', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('question_sets')
  }
}

module.exports = QuestionSetSchema
