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

  // need to implement catch for errors
  CreateAsync: async (req, res) => {
    const hashedPassword = await Bcrypt.hash(req.body.password, saltRound)
    const villager = new Villager({
      villagerPigeonMail: req.body.villagerPigeonMail,
      name: req.body.name,
      password: hashedPassword, 
      dob: req.body.dob
    });
    try {
      const result = await villager.save();
      console.log(result);
      res.json(result);
    } catch(error) {
      console.error(error);
      res.status(409).json(error);
    }
  },

  // Log-in function
  LogInVillager: async (req, res) => {
    console.log('trying to login');
    try {
      const resultVillager = await Villager.findOne({villagerPigeonMail: req.body.villagerPigeonMail});
      if (!resultVillager) {
        res.status(400).json('No such villager')
      }
      if (resultVillager) {
        const passwordMatched = await Bcrypt.compare(req.body.password, resultVillager.password)
        if (passwordMatched) {
          res.json(resultVillager)
        } else {
          res.status(401).json('wrong password')
        }
      }
    } catch(error) {
      console.error(error);
    }
  }
};

module.exports = VillagerController;