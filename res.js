"use strict";

exports.berhasil = function (values, res) {
  const data = {
    status_code: "200",
    value: values,
  };
  res.json(data);
  res.end;
};
