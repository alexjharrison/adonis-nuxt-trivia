'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Game extends Model {
    teams(){
        return this.belongsToMany('App/Models/Team')
    }
}

module.exports = Game
