"use strict";

const User = use("App/Models/User");

class AuthController {
  async login({ request, auth }) {
    const { email, password } = request.body;
    return auth.withRefreshToken().attempt(email, password);
  }

  async register({ request, auth }) {
    const user = await User.create(request.body);

    const userWithJwt = await auth.generate(user, true);

    return userWithJwt;
  }

  async logout() {
    return {};
  }

  async user({ auth: { user } }) {
    return { user };
  }
}

module.exports = AuthController;
