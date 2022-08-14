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
      doc_login: 'eaglehead',
      docName: 'Eagle Head',
      password: 'hashedPassword'
    });
    doctor.save((err) => {
      expect(err).toBeNull();

      Doctor.find((err, doctors) => {
        expect(err).toBeNull();
        expect(doctors[0]).toMatchObject({
          doc_login: 'eaglehead',
          docName: 'Eagle Head',
          password: 'hashedPassword'
        });
        done();
      });
    });
  });
  it('saves a doctor, async bcrypt', async () => {
    const newDoctor = new Doctor({
      doc_login: 'maskeddoc',
      docName: 'Masked Doc',
      password: 'inputPassword'
    });
    await newDoctor.save();
    const findResult = await Doctor.find();
    expect(findResult[0]).toMatchObject({
      doc_login: 'maskeddoc',
      docName: 'Masked Doc',
      password: 'inputPassword'
    });
  });
});