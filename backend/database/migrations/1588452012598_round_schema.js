'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RoundSchema extends Schema {
  up () {
    this.create('rounds', (table) => {
      table.increments()
      table.integer('number').unsigned().notNullable()
      table.enu('game_type',['standard','pick_a_point','list','2part2pt','3part3pt','wager']).notNullable()
      table.integer('set_id').unsigned().references('id').inTable('sets')
      table.timestamps()
    })
  }

  down () {
    this.drop('rounds')
  }
}

module.exports = RoundSchema
