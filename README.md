# Listy
### An app for lists of things

Hi, this is Listy! 

Listy is an app for managing lists of things. It came into existence to support a workshop that I built called ["Building Your First React App"](https://github.com/pepopowitz/your-first-react-app-exercises). It also exists to make it easier to manage Twitter lists, making an awful experience slightly less awful. 

## Running the app

### Install dependencies

You'll need to install dependencies in two places - once for the API, and once for the React app. Sorry!

In a console, run the following statements.

```
npm install
cd client
npm install
cd ..
```

Once dependencies are installed, you can run the app with one of two data sources: a fake one, or one that leverages the Twitter API.

### Using the fake data source

The fake data source contains lists of puppies and kittens. To use this data source, run this statement in a console:

`npm run start:fake`

This will start up both the React app and API in a single terminal. Changes to either the API or React app should automatically rebuild and update in your browser.

### Using the Twitter data source

The Twitter data source interacts with the Twitter API to associate people you follow with lists that you own. To use this data source, you'll need to fill in some API keys from Twitter.

In the root of this repo is a file named .env.example. This is a sample environment file, illustrating all the keys you'll need to fill in. You'll want to copy this file to one named .env, then fill in each of the keys in the .env file. You'll want to replace the `?????___?????` strings with your keys from Twitter.

You can generate your API keys for Twitter at https://apps.twitter.com/. You'll need to create an app, generate the Consumer Key/Secret for the app if they aren't already, then also generate Your Access Token & Secret.

Once you've filled in your API keys, run this statement in a console:

`npm run start:twitter`

This will start up both the React app and API in a single terminal. Changes to either the API or React app should automatically rebuild and update in your browser.

## The workshop

The abstract for the workshop associated with this repo [lives here](https://www.stevenhicks.me/workshops/building-your-first-react-app/).

It's a good workshop! If you're interested in me giving it to your company or at an event, [let me know](https://github.com/pepopowitz/listy/issues/new).
