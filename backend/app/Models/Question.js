'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Question extends Model {
    answer(){
        return this.belongsTo('App/Models/Answer')
    }

    round(){
        return this.belongsTo('App/Models/Round')
    }

    image(){
        return this.hasOne('App/Models/Image')
    }
}

module.exports = Question
