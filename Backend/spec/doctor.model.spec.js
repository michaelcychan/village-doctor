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
      docLogin: 'eaglehead',
      docName: 'Eagle Head',
      password: 'hashedPassword'
    });
    doctor.save((err) => {
      expect(err).toBeNull();

      Doctor.find((err, doctors) => {
        expect(err).toBeNull();
        expect(doctors[0]).toMatchObject({
          docLogin: 'eaglehead',
          docName: 'Eagle Head',
          password: 'hashedPassword'
        });
        done();
      });
    });
  });
  it('saves a doctor, async bcrypt', async () => {
    const newDoctor = new Doctor({
      docLogin: 'maskeddoc',
      docName: 'Masked Doc',
      password: 'inputPassword'
    });
    await newDoctor.save();
    const findResult = await Doctor.find();
    expect(findResult[0]).toMatchObject({
      docLogin: 'maskeddoc',
      docName: 'Masked Doc',
      password: 'inputPassword'
    });
  });
  it('returns null if doctor login name is wrong', async () => {
    const newDoctor = new Doctor({
      docLogin: 'maskeddoc',
      docName: 'Masked Doc',
      password: 'inputPassword'
    });
    await newDoctor.save();
    const findResult = await Doctor.findOne({docLogin: 'nosuchdoctor'});
    expect(findResult).toBeNull();
  });
  it('returns null if doctor login name is wrong', async () => {
    const newDoctor = new Doctor({
      docLogin: 'maskeddoc',
      docName: 'Masked Doc',
      password: 'inputPassword'
    });
    await newDoctor.save();
    const findResult = await Doctor.findOne({docLogin: 'maskeddoc'});
    expect(findResult.password).toBe('inputPassword');
    expect(findResult.docLogin).toBe('maskeddoc');
    expect(findResult.docName).toBe('Masked Doc');
  });
});