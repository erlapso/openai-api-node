ATTENTION This package is deprecated. Use the official [OpenAI node library](https://github.com/openai/openai-node)

# OpenAI API Node

A simple node wrapper for the OpenAI API.

## Disclaimer

The API itself and this package are meant for development and research use only. Don't use this in production.

If you don't have an API key, you need to request it at [openai.com](https://beta.openai.com/)

## Install

$ npm install openai-api-node

## Usage

Quick start with a new completion:

```javascript
const OpenAIAPI = require('../lib/openaiapi');

// Load your key from an environment variable or secret management service
// (do not include your key directly in your code)
const OPENAI_API_KEY = process.env.OPENAI_API_KEY

const openai = new OpenAIAPI(OPENAI_API_KEY)

openai.CompletionsCreate("your starting prompt")
  .then(function(data) {
    //Do something with the data.
  })
  .catch(function(err) {
    //The API returned an error
  })
```

You will get an object similar to the following:

```javascript
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
```

### Init

You will need an API key to initialize the object. You can also pass the following parameters:

```javascript
// Load your key from an environment variable or secret management service
// (do not include your key directly in your code)
const OPENAI_API_KEY = process.env.OPENAI_API_KEY

const openai = new OpenAIAPI(OPENAI_API_KEY, apiBase = "api.openai.com", version = "v1")
```

### CompletionsCreate

CompletionsCreate accepts the following parameters. Only the first parameter is required:

```javascript
CompletionsCreate(prompt, max_tokens=5, engine="davinci", options={})
```

You can also pass additional options as an object

## Contribute

Make a pull request :)

## Test

We are using mocha to run a basic test. To pass the test, you need to put your api key in `test/completions.js`

## License

[The MIT License](http://opensource.org/licenses/MIT)
