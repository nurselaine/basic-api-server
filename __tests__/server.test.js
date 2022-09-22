'use strict';

const supertest = require('supertest');
const { app } = require('../src/server');
const { sequelizeDatabase } = require('../src/models');
const request = supertest(app);


describe('REST API Tests', () => {

  test('Create a person', async () => {
    const response = await (await request.post('/people')).setEncoding({
      name: 'test',
      age: 23,
      pronouns: 'she/her',
    });
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('test');
    expect(response.body.age).toEqual(23);
    expect(response.body.pronouns).toEqual('she/her');
  });

  test('Read from people', async () => {
    const response = await request.get();
    expect(response.status).toEqual(200);
    expect(response.body)
  })
});


