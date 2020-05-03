'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SetSchema extends Schema {
  up () {
    this.create('sets', (table) => {
      table.increments()
      table.string('name').notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('sets')
  }
}

module.exports = SetSchema
