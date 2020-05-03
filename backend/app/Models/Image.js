'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Image extends Model {
    question(){
        return this.belongsTo('App/Models/Question')
    }
    answer(){
        return this.belongsTo('App/Models/Answer')
    }
}

module.exports = Image
