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

router.delete("/:kasboekId", (req, res, next) => {
  const id = req.params.kasboekId;
  db.Kasboek.destroy({
    where: { id: id },
  })
    .then(() => {
      res
        .status(200)
        .json({ msg: "Deleted Successfully -> kasboekId Id = " + id });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "error", details: err });
    });
});

module.exports = router;
