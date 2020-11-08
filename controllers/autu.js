const db = require("../app/models");

const create_autu = async (req, res) => {
  const { autu_info } = req.body;
  db.Autu.create(autu_info, { include: [
      {model:db.Infractions,as:"infractions"},
      {model:db.Species_Autu,as:"species"},
      {model:db.Individuals_Autu,as:"individuals"}
  ] });
};

module.exports = { create_autu };
