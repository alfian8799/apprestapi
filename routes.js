"use strict";

module.exports = function (app) {
  const jsonku = require("./controller");

  app.route("/").get(jsonku.index);
  app.route("/tampil").get(jsonku.tampilmahasiswa);
  app.route("/tampil/:id").get(jsonku.tampilberdasarkanid);
};
