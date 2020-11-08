const db = require("../app/models");

const create_species = async (req, res) => {
  const { spp_info } = req.body;

  await db.Species_Register.create(spp_info, {
    include: [
      {
        model: db.Species_Pictures,
        as: "pictures",
      },
      {
        model: db.Species_Characteristics,
        as: "characteristics",
      },
    ],
  });
};

const get_species = async (req, res) => {
  const data = await db.Species_Register.findAll({
    include: [
      {
        model: db.Species_Pictures,
        as: "pictures",
      },
      {
        model: db.Species_Characteristics,
        as: "characteristics",
      },
    ],
  });

  res.send(data)
};

module.exports = { create_species, get_species };
