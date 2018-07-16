export function index(req, res) {
  res.json([
    {
      listId: req.params.listId,
      friendId: 2,
      listName: 'a fake list from twitter',
      friendName: 'a fake friend from twitter',
    },
  ]);
}

export function addFriendsToList(req, res) {
  res.json({ listId: req.params.listId, message: 'added fake friends to list from twitter' });
}

export function removeFriendsFromList(req, res) {
  res.json({ listId: req.params.listId, message: 'removed fake friends from list from twitter' });
}
