const Doctor = require('../models/doctor.model');
const ProductCategory = require('../models/productCategory.model');
const Product = require('../models/product.model');

// Bcrypt
const bcrypt = require('bcrypt');
const saltRound = 5;

const DoctorController = {
  CreateDoctor: (req, res) => {
    bcrypt.hash(req.body.password, saltRound, (error, hashedPassword) => {
      const doctor = new Doctor({
        docLogin: req.body.docLogin,
        docName: req.body.docName,
        password: hashedPassword
      });
      console.log(doctor);
      doctor.save((error, result) => {
        if (error) {
          console.log(error);
          res.status(409).json(error);
        } else {
            res.json('New Doctor joined!')
        }
      })
    });
  },

  // log-in function
  LogInDoctor: (req, res) => {
    console.log('trying to log in');
    const docLogin = req.body.docLogin;
    const inputPassword = req.body.password;
    Doctor.findOne({docLogin: docLogin})
      .then((doctor) => {
        if(!doctor) {
          res.status(400).json('No such user');
        } else {
          bcrypt.compare(inputPassword, doctor.password, (error, hashComparison) => {
            if (!hashComparison) {
              res.status(401).json('wrong password')
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
  },

  CreateCategory: (req, res) => {
    console.log('creating product category');
  },
};

module.exports = DoctorController;