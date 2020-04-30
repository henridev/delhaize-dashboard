const express = require("express");
const router = express.Router();
const db = require("../models/index");

// GET ALL ORDERS

router.get("*", function (req, res) {
  db.Kasboek.findAll({ order: [["createdAt", "DESC"]] }).then((kasboekObjs) => {
    rows = kasboekObjs.map((val) => val.dataValues);
    res.json(rows);
  });
});

router.post("/kasboek", function (req, res) {
  const data = req.body.newKasboekRow;
  db.Kasboek.findOrCreate({ where: { ...data } }).then(([kasObj, created]) => {
    res.status(200);
    res.send("succes");
  });
});

router.delete("/:kasboekId", (req, res, next) => {});

module.exports = router;
