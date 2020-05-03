'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Round extends Model {
    set(){
        return this.hasOne('App/Models/Set')
    }

    points(){
        return this.hasMany('App/Models/Point')
    }
}

module.exports = Round
