export default function(twitterShape) {
  return twitterShape.map(list => ({
    id: list.id_str,
    name: list.name,
    uri: list.uri,
    memberCount: list.member_count,
  }));
}