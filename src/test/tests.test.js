const request = require('supertest')
const { app, server } = require('../app')

describe('GET /', () => {
  test('Should return a message welcome to my API!', async () => {
    const response = await request(app).get('/')
    expect(response.status).toBe(200)
    expect(response.type).toBe('application/json')
    expect(response.body).toEqual({ message: 'Welcome to my API!' })
  })
})

afterAll(async () => {
  server.close()
})
