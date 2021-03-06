"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

// Route.resource("sets", "SetsController").apiOnly().middleware("auth");

Route.group(() => {
  Route.post("login", "AuthController.login");
  Route.post("register", "AuthController.register");
  Route.post("logout", "AuthController.logout").middleware(["auth"]);
  Route.get("user", "AuthController.user").middleware(["auth"]);
}).prefix("auth");

Route.resource("game-templates", "GameTemplateController")
  .apiOnly()
  .middleware(["auth"])
  .formats(["json"]);
