'use strict';

const supertest = require('supertest');
const { app } = require('../src/server');
const request = supertest(app);


describe('REST API Tests', () => {

//   it('Create a person', async () => {
//     const response = await request.post('/people').setEncoding({
//       name: 'test',
//       age: 23,
//       pronouns: 'she/her',
//     });
//     expect(response.status).toEqual(200);
//     expect(response.body.name).toEqual('test');
//     expect(response.body.age).toEqual(23);
//     expect(response.body.pronouns).toEqual('she/her');
//   });// not working due to server issues/thunderclient

//   it('Create a food', async () => {
//     // const response = await request.post('/people').setEncoding({
//     //   name: 'chicken',
//     //   calories: 100,
//     //   cuisine: 'American',
//     // });
//     const response = await request.post('/food').field('name', 'calories', 'cuisine').attach('chicken', 100, 'American');
//     expect(response.status).toEqual(200);
//     expect(response.body.name).toEqual('chicken');
//     expect(response.body.calories).toEqual(100);
//     expect(response.body.cuisine).toEqual('American');
//   });

  test('Read a list of all persons', async () => {
    const response = await request.get('/person');
    expect(response.status).toEqual(200);
    expect(response).toBeTruthy();
  });

  it('Read a list of all food items', async () => {
    const response = await request.get('/food');
    expect(response.status).toEqual(200);
    expect(response).toBeTruthy();
  });

  test('Read from people', async () => {
    const response = await request.findAll();
    expect(response.status).toEqual(200);
    expect(response.body).toBeTruthy();
  });

  test('Updates people data', async () => {
    const response = await request.update({name: test});
    expect(response.status).toEqual(200);
  });

  test('Deletes table data from peoples', async () => {
    const response = await request.delete();
    expect(response.status).toEqual(200);
    expect(response.text).toEqual('successfully deleted')
  });

  it('Handles bad routes', async () => {
    const response = await request.get('/catchAll');
    expect(response.status).toEqual(404);
    expect(response.body.message).toEqual('Not Found');
  });

  it('Handles bad methods', async () => {
    const response = await request.delete('/foo');
    expect(response.status).toEqual(404);
    expect(response.body.message).toEqual('Not Found');
  });

});


