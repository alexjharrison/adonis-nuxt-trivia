'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class QuestionSchema extends Schema {
  up () {
    this.create('questions', (table) => {
      table.increments()
      table.integer('round_id').unsigned().references('id').inTable('rounds')
      table.integer('answer_id').unsigned().references('id').inTable('answers')
      table.timestamps()
    })

    this.alter('answers', (table) => {
      table.integer('question_id').unsigned().references('id').inTable('questions')
    })
  }

  down () {
    this.alter('answers', table=>{
      table.dropColumn('question_id')
    })

    this.drop('questions')

  }
}

module.exports = QuestionSchema
