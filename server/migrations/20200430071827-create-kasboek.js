"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Kasboek", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      datum: {
        type: Sequelize.CHAR(20),
      },
      datum_dateformat: {
        type: Sequelize.DATE,
      },
      cash: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      cheq_spec: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      maaltijdcheque: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      cheque_delhaize: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      tegoebon: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      bon_pub_dll: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      bon_pub_lev: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      publiciteitsbon: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      leeggoedbon: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      ecocheques: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      mobile: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      online_betaling: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      bancontact: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      elec_maaltcheq: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      terugbet_lotto: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      kredietkaart: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      op_krediet: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      andere: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      promo: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      kadobon: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      elec_ecocheques: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      elec_cadeau: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      afronding: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      totaal_lade: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      tegoedbon_crea: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      totaal: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      amex: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      visa: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      mastercard: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      maestro: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      visa_electron: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      payfair: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      sodexo: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      accordenred: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      andere_totaal: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      som_totaal: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      verschil: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Kasboek");
  },
};
