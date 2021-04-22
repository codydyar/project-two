
const app = require('../app')
const request = require('supertest')(app)
 // redirect attemts to put /api/v1/books 
test("GET /search", done => {
  request.get('/search')
      .expect(200)
      .end(function(err, res) {
        done()
      })
})

  test("GET first result from /search", done => {
    request.get('/search')
        .expect(200)
        .end(function(err, res) {
          expect(res.body[0]["id"]).toEqual(1) //checks if db has returns first entry with id = 1 
          done()
        })
  })