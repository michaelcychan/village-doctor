const Doctor = require('../models/doctor.model');

// Bcrypt
const bcrypt = require('bcrypt');
const saltRound = 5;

const DoctorController = {
  Index: (req, res) => {
    Doctor.find()
      .then(doctors => res.json(doctors))
      .catch(error => res.status(400).json('Doctor not found: ' + error));
  },

  Create: (req, res) => {
    bcrypt.hash(req.body.password, saltRound, (error, hashedPassword) => {
      const doctor = new Doctor({
        doc_login: req.body.doc_login,
        docName: req.body.docname,
        password: hashedPassword
      });
      doctor.save((error, result) => {
        if (error) {
          console.log(error);
          res.status(409).render('/new');
        } else {
            res.json('New Doctor joined!')
        }
      })
    });
  }
};

module.exports = DoctorController;