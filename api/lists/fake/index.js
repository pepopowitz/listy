export function index(req, res) {
  res.json(lists);
}

export function create(req, res) {
  const id = ++lastId;
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

let lastId = 4;
const lists = [
  {
    id: '1',
    name: 'a fake list 1',
    uri: 'lists/1',
  },
  {
    id: '2',
    name: 'a fake list 2',
    uri: 'lists/2',
  },
  {
    id: '3',
    name: 'a fake list 3',
    uri: 'lists/3',
  },
  {
    id: '4',
    name: 'a fake list 4',
    uri: 'lists/4',
  },
];
