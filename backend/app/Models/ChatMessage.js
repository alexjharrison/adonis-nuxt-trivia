'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ChatMessage extends Model {
    chat(){
        return this.belongsTo('App/Models/Chat')
    }
    user(){
        return this.belongsTo('App/Models/User')
    }
}

module.exports = ChatMessage
