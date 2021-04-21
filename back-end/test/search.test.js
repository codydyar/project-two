
const app = require('../app')
const request = require('supertest')(app)
 // redirect attemts to put /api/v1/books 
test("GET /search", done => {
  request.get('/search')
      .expect(200)
      .end(function(err, res) {
        // expect(res.body.length).toEqual(0)
        done()
      })
})