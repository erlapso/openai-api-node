var http = require('https')
class OpenAiAPI {

  constructor(personalKey, apiBase = 'api.openai.com', version = "v1") {
    this.__personalKey = personalKey;
    this.__apiBase = apiBase;
    this.__version = version;
    this.__httpOptions = {
      hostname: apiBase,
      port: 443,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + personalKey
      }
    };
  }
  CompletionsCreate(prompt, max_tokens=5, engine="davinci", moreOptions) {
    var self = this;
    var promise = new Promise(function(done, error) {
      var otherOptions = {path: "/"+self.__version+"/engines/"+engine+"/completions"}
      var options = {...otherOptions, ...self.__httpOptions }
      const defaultPostData = {
        'prompt': prompt,
        'max_tokens': max_tokens
      }
      var postData = JSON.stringify({...moreOptions, ...defaultPostData})
      var responseData = "";
      const req = http.request(options, (res) => {
        res.setEncoding('utf8');
        res.on('data', (chunk) => {
          responseData += chunk
        });
        res.on('end', () => {
          done(JSON.parse(responseData))
        });
      });
      req.on('error', (e) => {
        error(e)
      });
      req.write(postData);
      req.end();
    })
    return promise;
  }
  
}
module.exports = OpenAiAPI