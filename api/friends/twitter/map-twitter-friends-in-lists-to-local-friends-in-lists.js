export default function (listsWithFriends) {
  return listsWithFriends.map(list => {
    return{
      ...list,
      friends: list.friends.map(user => user.id_str)
    }
  })
}