import { friends } from './data';

export function index(req, res) {
  res.json(friends);
}

export function update(req, res) {
  const id = req.params.id;

  const match = friends.find(friend => friend.id === id);

  if (match === undefined) {
    res.status(404).send();
    return;
  }

  match.name = req.body.name;

  res.json(match);
}