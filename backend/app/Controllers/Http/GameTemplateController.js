"use strict";
const GameTemplate = use("GameTemplate");

class GameTemplateController {
  // get all
  async index({ request }) {
    return "index";
  }

  // get one
  async show({ request }) {
    return "show";
  }

  // patch one
  async update({ request }) {
    return "update";
  }

  // post one
  async store({ request, auth }) {
    const newTemplate = await GameTemplate.createTemplate(
      request.body,
      auth.user
    );
    return newTemplate;
  }

  // delete one
  async destroy({ request }) {
    return "destroy";
  }
}

module.exports = GameTemplateController;
