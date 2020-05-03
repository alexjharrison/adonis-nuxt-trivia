'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Team extends Model {

    users(){
        return this.belongsToMany('App/Models/User')
    }

    games(){
        return this.belongsToMany('App/Models/Game')
    }

    chat(){
        return this.hasOne('App/Models/Chat')
    }
}

module.exports = Team
