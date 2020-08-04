# OpenAi API Node

A simple node wrapper for the OpenAI API.

## Disclaimer

The API itself and this package are meant for development and research use only. Don't use this in production.

If you don't have an API key, you need to request it at (openai.com)[https://beta.openai.com/]

## Install

$ npm install openai-api-node

## Usage

Quick start with a new completion:

const OpenAIAPI = require('../lib/openaiapi');
  var openai = new OpenAIAPI("YOUR API KEY HERE")
  openai.CompletionsCreate("your starting prompt")
  .then(function(data) {
    //Do something with the data.
  })
  .catch(function(err) {
    //The API returned an error
  })
})

You will get an object similar to the following:

{
  id: 'cmpl-yyyyyyyyyyy',
  object: 'text_completion',
  created: 1596217113,
  model: 'davinci:2020-05-03',
  choices: [
    {
      text: '” problem for me',
      index: 0,
      logprobs: null,
      finish_reason: 'length'
    }
  ]
}

### Init

You will need an API key to initialize the object. You can also pass the following parameters:
  
 $ var openai = new OpenAIAPI("YOUR API KEY HERE", apiBase = "api.openai.com", version = "v1")

### CompletionsCreate

CompletionsCreate accepts the following parameters. Only the first parameter is required:

$ CompletionsCreate(prompt, max_tokens=5, engine="davinci")

## Contribute

Make a pull request :)

## Test

We are using mocha to run a basic test. To have it succed, you need to put your api key in `test/completions.js`

## License

[The MIT License](http://opensource.org/licenses/MIT)