import { friends } from '../../friends/fake/data';

export async function addFriendToList(req, res) {
  const { listId } = req.params;
  const { friendId } = req.query;

  const friend = friends.find(f => f.id === friendId);

  if (friend === undefined) {
    res.status(404).send();
  }

  if (!friend.lists.includes(listId)) {
    friend.lists.push(listId);
  }

  res.json(friend);
}

export async function removeFriendFromList(req, res) {
  const { listId } = req.params;
  const { friendId } = req.query;

  const friend = friends.find(f => f.id === friendId);

  if (friend === undefined) {
    res.status(404).send();
  }

  friend.lists = friend.lists.filter(list => list !== listId);

  res.json(friend);
}

// todo - remove vvvv
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

export function addFriendsToList(req, res) {
  res.json({ listId: req.params.listId, message: 'added fake friends to list' });
}

export function removeFriendsFromList(req, res) {
  res.json({ listId: req.params.listId, message: 'removed fake friends from list' });
}
