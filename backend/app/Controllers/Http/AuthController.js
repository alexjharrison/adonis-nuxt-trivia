"use strict";

const User = use("App/Models/User");

class AuthController {
  user = null;

  async login({ request, auth }) {
    const { email, password } = request.body;
    return auth.withRefreshToken().attempt(email, password);
  }

  async register({ request, auth }) {
    this.user = await User.create(request.body);

    const userWithJwt = await auth.generate(this.user, true);

    return userWithJwt;
  }
}

module.exports = AuthController;
