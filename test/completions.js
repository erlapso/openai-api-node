
const OpenAiAPI = require('../lib/openaiapi');
describe("Completions", function() {
  it("should create a new assertion", function(done) {
    var o = new OpenAiAPI("YOUR API KEY HERE")
    o.CompletionsCreate("hello world")
    .then(function(data) {
      console.log(data)
      done()
    })
    .catch(function(err) {
      done(err)
    })
  })
})