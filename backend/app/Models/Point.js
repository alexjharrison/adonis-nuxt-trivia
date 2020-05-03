'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Point extends Model {

  /**
   * A relationship on tokens is required for auth to
   * work. Since features like `refreshTokens` or
   * `rememberToken` will be saved inside the
   * tokens table.
   *
   * @method rounds
   *
   * @return {Object}
   */
  round () {
    return this.belongsTo('App/Models/Round')
  }
}

module.exports = Point
