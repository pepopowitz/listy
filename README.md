# Listy
### An app for lists of things

Hi, this is Listy! 

Listy is an app for managing lists of things. It exists to support a workshop that I'm currently building, called "Building Your First React App".



## Running the app

### Install dependencies

You'll need to install dependencies in two places - once for the API, and once for the React app.

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

The abstract for the workshop associated with this repo currently looks like this:


### Building Your First React App

In this workshop, you'll learn how to build a single-page app with React. We'll discuss the fundamentals of React development, the "React" way of building apps, and suggestions for writing maintainable React code. You'll get hands-on experience with JSX, React Router, several methods of managing state, and testing tools like Jest and Enzyme.

We'll be creating an app to keep track of all the adorable kittens and puppies that we love. The React landscape is extensive, and we can't cover it all - but you'll leave this workshop feeling confident to build your next app with React.

This session includes a healthy balance of instruction and hands-on activities. We'll cover a broad variety of topics required to build a React app:

* React fundamentals
* The 'Component' mindset
* JSX, a strange-looking hybrid between JavaScript and HTML
* Verifying component inputs
* Styling React components
* Routing
* State management
* Automated testing
* Best practices

Experience with HTML, CSS, and JavaScript is required. You'll need Git v2.15.0 or higher, NodeJS v8.9.4 or higher, NPM v5.6.0 or higher, and a text editor of your choosing.

A URL with specific prerequisite instructions and code/instructions for the exercises will be provided prior to the event.

