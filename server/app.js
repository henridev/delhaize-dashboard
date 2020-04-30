const express = require("express");
const app = express();
const path = require("path");
const db = require("./models/index");
require("dotenv").config({ path: path.join(__dirname, ".env") });

const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");

const data = {
  datum: "zondag 02/09/2019",
  datum_dateformat: "2019-01-08T23:00:00.000Z",
  cash: 2015.14,
  cheq_spec: 50,
  maaltijdcheque: 0,
  cheque_delhaize: 35,
  tegoebon: 0,
  bon_pub_dll: 0,
  bon_pub_lev: 16.96,
  publiciteitsbon: 1.5,
  leeggoedbon: 59,
  ecocheques: 30,
  mobile: 0,
  online_betaling: 0,
  bancontact: 14938.29,
  elec_maaltcheq: 2571.22,
  terugbet_lotto: 0,
  kredietkaart: 645.22,
  op_krediet: 0,
  andere: 0,
  promo: 0,
  kadobon: 0,
  elec_ecocheques: 0,
  elec_cadeau: 0,
  afronding: 0,
  totaal_lade: 20362.44,
  tegoedbon_crea: 0,
  totaal: 20362.44,
  amex: 7.83,
  visa: 170.31,
  mastercard: 406.44,
  maestro: 60.64,
  visa_electron: 0,
  payfair: 296.34,
  sodexo: 1067.87,
  accordenred: 1207.01,
  andere_totaal: 80,
  som_totaal: 18347.19,
  verschil: 0,
};

app.use(
  cors({
    origin: (origin, cb) => {
      cb(null, process.env.NODE_ENV !== "production");
    },
    optionsSuccessStatus: 200,
    credentials: true,
  })
);
app.use(logger("dev"));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "../client/build")));

app.use("/api/uploads", require("./routes/upload.js"));
app.use("/api/kasboek", require("./routes/kasboek.js"));

app.use("/api/*", (req, res, next) => {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// Error handler
app.use((err, req, res, next) => {
  console.error("----- An error happened -----");
  console.error(err);

  // only render if the error ocurred before sending the response
  if (!res.headersSent) {
    res.status(err.status || 500);

    // A limited amount of information sent in production
    if (process.env.NODE_ENV === "production") res.json(err);
    else
      res.json(
        JSON.parse(JSON.stringify(err, Object.getOwnPropertyNames(err)))
      );
  }
});

module.exports = app;
