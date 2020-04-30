"use strict";
module.exports = (sequelize, DataTypes) => {
  const Kasboek = sequelize.define(
    "Kasboek",
    {
      datum: DataTypes.CHAR(20),
      datum_dateformat: DataTypes.DATE,
      cash: DataTypes.DECIMAL(10, 2),
      cheq_spec: DataTypes.DECIMAL(10, 2),
      maaltijdcheque: DataTypes.DECIMAL(10, 2),
      cheque_delhaize: DataTypes.DECIMAL(10, 2),
      tegoebon: DataTypes.DECIMAL(10, 2),
      bon_pub_dll: DataTypes.DECIMAL(10, 2),
      bon_pub_lev: DataTypes.DECIMAL(10, 2),
      publiciteitsbon: DataTypes.DECIMAL(10, 2),
      leeggoedbon: DataTypes.DECIMAL(10, 2),
      ecocheques: DataTypes.DECIMAL(10, 2),
      mobile: DataTypes.DECIMAL(10, 2),
      online_betaling: DataTypes.DECIMAL(10, 2),
      bancontact: DataTypes.DECIMAL(10, 2),
      elec_maaltcheq: DataTypes.DECIMAL(10, 2),
      terugbet_lotto: DataTypes.DECIMAL(10, 2),
      kredietkaart: DataTypes.DECIMAL(10, 2),
      op_krediet: DataTypes.DECIMAL(10, 2),
      andere: DataTypes.DECIMAL(10, 2),
      promo: DataTypes.DECIMAL(10, 2),
      kadobon: DataTypes.DECIMAL(10, 2),
      elec_ecocheques: DataTypes.DECIMAL(10, 2),
      elec_cadeau: DataTypes.DECIMAL(10, 2),
      afronding: DataTypes.DECIMAL(10, 2),
      totaal_lade: DataTypes.DECIMAL(10, 2),
      tegoedbon_crea: DataTypes.DECIMAL(10, 2),
      totaal: DataTypes.DECIMAL(10, 2),
      amex: DataTypes.DECIMAL(10, 2),
      visa: DataTypes.DECIMAL(10, 2),
      mastercard: DataTypes.DECIMAL(10, 2),
      maestro: DataTypes.DECIMAL(10, 2),
      visa_electron: DataTypes.DECIMAL(10, 2),
      payfair: DataTypes.DECIMAL(10, 2),
      sodexo: DataTypes.DECIMAL(10, 2),
      accordenred: DataTypes.DECIMAL(10, 2),
      andere_totaal: DataTypes.DECIMAL(10, 2),
      som_totaal: DataTypes.DECIMAL(10, 2),
      verschil: DataTypes.DECIMAL(10, 2),
    },
    {
      freezeTableName: true,
    }
  );
  Kasboek.associate = function (models) {
    // associations can be defined here
  };
  return Kasboek;
};
