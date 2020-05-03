"use strict";

const Set = use("App/Models/User");

class SetsController {
  index(request) {
    const set = new Set();
    return request.params;
  }
}

module.exports = SetsController;
