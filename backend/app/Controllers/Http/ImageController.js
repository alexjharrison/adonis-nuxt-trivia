"use strict";

const Helpers = use("Helpers");

class ImageController {
  async store({ request }) {
    const profilePic = request.file("image", {
      types: ["image"],
      size: "2mb",
    });

    await profilePic.move(Helpers.publicPath("uploads"), {
      name: "custom-name.jpg",
      overwrite: true,
    });

    if (!profilePic.moved()) {
      return profilePic.error();
    }
    return "File moved";
  }
}

module.exports = ImageController;
