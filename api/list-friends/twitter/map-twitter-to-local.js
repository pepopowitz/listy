export default function(twitterShape) {
  return twitterShape.users.map(twitterFriend => ({
    id: twitterFriend.id_str,
    name: twitterFriend.name,
    screenName: twitterFriend.screen_name,
    location: twitterFriend.location,
    description: twitterFriend.description,
    url: twitterFriend.url,
    followersCount: twitterFriend.followers_count,
    friendsCount: twitterFriend.friends_count,
    profileImageUrl: twitterFriend.profile_image_url,
    profileImageUrlHttps: twitterFriend.profile_image_url_https,
  }));
}
