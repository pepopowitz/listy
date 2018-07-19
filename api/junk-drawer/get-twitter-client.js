import Twitter from 'twitter';

export default function() {
  return new Twitter({
    consumer_key: process.env.APP_TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.APP_TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.APP_TWITTER_ACCESS_TOKEN,
    access_token_secret: process.env.APP_TWITTER_ACCESS_TOKEN_SECRET,
  });
}
