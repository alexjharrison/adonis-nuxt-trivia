"use strict";

const Game = use("App/Models/Game");

class GameController {
  index(request, id) {
    console.log(Game);
    return request;
  }
}

module.exports = GameController;
