import { lastId, lists } from './data';

let myLastId = lastId;
const myLists = lists;

export function index(req, res) {
  res.json(myLists);
}

export function create(req, res) {
  const id = ++myLastId;
  const newList = {
    id: `${id}`,
    name: req.body.name,
    uri: 'lists/' + id,
  };

  myLists.push(newList);

  res.json(newList);
}

export function update(req, res) {
  const id = req.params.id;

  const match = myLists.find(list => list.id === id);

  if (match === undefined) {
    res.status(404).send();
    return;
  }

  match.name = req.body.name;

  res.json(match);
}
