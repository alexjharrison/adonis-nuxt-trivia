'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TeamSchema extends Schema {
  up () {
    this.create('teams', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.timestamps()
    })

    // this.alter('users', table=>{
    //   table.integer('team_id').unsigned().references('id').inTable('teams')
    // })
  }

  down () {
    // this.alter('users',table=>{
    //   table.dropColumn('team_id')
    // })
    
    this.drop('teams')
  }
}

module.exports = TeamSchema
