"use strict";

const response = require("./res"); // Pastikan path benar
const connection = require("./conection"); // Pastikan path benar

exports.index = function (req, res) {
  response.berhasil("Aplikasi Restapi Berjalan", res); // Ganti response.berhasi menjadi response.berhasil
};

// menampilkan semua data mahasiwa
exports.tampilmahasiswa = function (req, res) {
  connection.query("SELECT * FROM tb_mahasiswa", function (
    error,
    rows,
    fileds
  ) {
    if (error) {
      connection.log(error);
    } else {
      response.berhasil(rows, res);
    }
  });
};

// Menampilkan semua data mahasiswa berdasarkan id
exports.tampilberdasarkanid = function (req, res) {
  let id = req.params.id;
  connection.query(
    `SELECT * FROM tb_mahasiswa WHERE id = '${id}'`, // Menggunakan template string
    function (error, rows, fields) {
      if (error) {
        console.log(error); // Menampilkan pesan kesalahan ke konsol
      } else {
        response.berhasil(rows, res);
      }
    }
  );
};
