"use strict";

const Set = use("App/Models/Set");

class SetsController {
  index(request) {
    const set = new Set();
    return request.params;
  }
}

module.exports = SetsController;
