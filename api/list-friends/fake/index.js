export function index(req, res) {
  res.json([
    {
      listId: req.params.listId,
      friendId: 2,
      listName: 'a fake list',
      friendName: 'a fake friend',
    },
  ]);
}


export async function addFriendToList(req, res) {
  res.json({ listId: req.params.listId, message: 'Friend added to list!'});
}

export async function removeFriendFromList(req, res) {
  res.json({ listId: req.params.listId, message: 'Friend removed from list!'});
}

export function addFriendsToList(req, res) {
  res.json({ listId: req.params.listId, message: 'added fake friends to list' });
}

export function removeFriendsFromList(req, res) {
  res.json({ listId: req.params.listId, message: 'removed fake friends from list' });
}
