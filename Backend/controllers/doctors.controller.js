const Doctor = require('../models/doctor.model');
const ProductCategory = require('../models/productCategory.model');
const Product = require('../models/product.model');

// Bcrypt
const bcrypt = require('bcrypt');
const saltRound = 5;

const DoctorController = {
  Index: (req, res) => {
    Doctor.find()
      .then(doctors => res.json(doctors))
      .catch(error => res.status(400).json('Doctor not found: ' + error));
  },

  CreateDoctor: (req, res) => {
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
  },

  LogInDoctor: (req, res) => {
    console.log('trying to log in');
    docLogin: req.body.docLogin;
    inputPassword = req.body.password;
    Doctor.findOne({docLogin: docLogin})
      .then((doctor) => {
        if(!doctor) {
          res.status(400).json('No such user');
        } else {
          bcrypt.compare(inputPassword, doctor.password, (error, hashComparison) => {
            if (!hashComparison) {
              res.status(401).json('Unauthorised access')
            } else {
              res.json({
                docName: doctor.docName,
                docLogin: doctor.docLogin
              });
            }
          });
        }
      })
    .catch(error => console.error(error))
  }
};

module.exports = DoctorController;