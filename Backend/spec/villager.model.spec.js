const mongoose = require('mongoose')
require('./mongodb_helper');
const Villager = require('../models/villager.model');

describe('Villager', () => {
  beforeEach((done) => {
    mongoose.connection.collection('villagers').deleteMany({}, () => {
      done();
    });
  });

  it('saves a villager to database', (done) => {
    const villager = new Villager({
      villagerpigeonmail: 'flat_head@riverside.hut',
      name: 'Flat head',
      password: 'hashedPassword'
    });
    villager.save((err) => {
      expect(err).toBeNull();

      Villager.find((err, villagers) => {
        expect(err).toBeNull();
        expect(villagers[0]).toMatchObject({
          villagerpigeonmail: 'flat_head@riverside.hut',
          name: 'Flat head',
          password: 'hashedPassword'
        });
        done();
      });
    });
  });
  it('saves a vilalger to database, testing using async instead of promises', async () => {
    const newVillager = new Villager({
      villagerpigeonmail: 'croccodile@hillside.hut',
      name: 'Croc feather',
      password: 'password'
    });
    await newVillager.save();
    const findResult = await Villager.find();
    expect(findResult[0]).toMatchObject({
      villagerpigeonmail: 'croccodile@hillside.hut',
      name: 'Croc feather',
      password: 'password'
    });
  });
});