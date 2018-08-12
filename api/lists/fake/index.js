import { lastId, lists } from './data';

let myLastId = lastId;

export function index(req, res) {
  res.json(lists);
}

export function detail(req, res) {
  const id = req.params.id;

  const match = lists.find(list => list.id === id);

  if (match === undefined) {
    res.status(404).send();
    return;
  }

  res.json(match);
}

export function create(req, res) {
  const id = ++myLastId;
  const newList = {
    id: `${id}`,
    name: req.body.name,
    uri: 'lists/' + id,
  };

  lists.push(newList);

  res.json(newList);
}

export function update(req, res) {
  const id = req.params.id;

  const match = lists.find(list => list.id === id);

  if (match === undefined) {
    res.status(404).send();
    return;
  }

  match.name = req.body.name;

  res.json(match);
}
