export default function(twitterShape) {
  return twitterShape.users.map(friend => ({
    id: friend.id_str,
    name: friend.name,
    screenName: friend.screenName,
    location: friend.location,
    description: friend.description,
    url: friend.url,
    profileImageUrl: friend.profile_image_url,
    profileImageUrlHttps: friend.profile_image_url_https,
  }));
}
