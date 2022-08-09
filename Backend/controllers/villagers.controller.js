const Villager = require('../models/villager.model');

// Bcrypt
const Bcrypt = require('bcrypt');
const saltRound = 5;

const VillagerController = {
  Index: (req, res) => {
    Villager.find()
      .then(villagers => res.json(villagers))
      .catch(error => res.status(400).json('Bad prayer request unanswered: ' + error));
  },

  Create: (req, res) => {
    Bcrypt.hash(req.body.password, saltRound, (error, hashedPassword) => {
      const villager = new Villager({
        villagerpigeonmail: req.body.villagerpigeonmail,
        name: req.body.name,
        password: hashedPassword
      });
      villager.save((error, result) => {
        if (error) {
          console.log(error);
          res.status(409).render('/new');
        } else {
            res.json('Villager added!')
        }
      })
    });
  },

  // need to implement catch for errors
  CreateAsync: async (req, res) => {
    const hashedPassword = await Bcrypt.hash(req.body.password, saltRound)
    const villager = new Villager({
      villagerpigeonmail: req.body.villagerpigeonmail,
      name: req.body.name,
      password: hashedPassword
    });
    const result = await villager.save();
    res.json(result);
  },
};

module.exports = VillagerController;