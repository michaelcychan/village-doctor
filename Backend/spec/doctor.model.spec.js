const mongoose = require('mongoose');
require('./mongodb_helper');
const Doctor = require('../models/doctor.model');

describe('Doctor', () => {
  beforeEach((done) => {
    mongoose.connection.collection('doctors').deleteMany({}, () => {
      done();
    });
  });
  it('saves a doctor to database', (done) => {
    const doctor = new Doctor({
      docname: 'Eagle Head',
      password: 'hashedPassword'
    });
    doctor.save((err) => {
      expect(err).toBeNull();

      Doctor.find((err, doctors) => {
        expect(err).toBeNull();
        expect(doctors[0]).toMatchObject({
          docname: 'Eagle Head',
          password: 'hashedPassword'
        });
        done();
      });
    });
  });
})