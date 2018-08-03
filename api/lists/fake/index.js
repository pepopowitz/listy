export function index(req, res) {
  res.json(lists);
}

export function create(req, res) {
  const id = ++lastId;
  const newList = {
    id,
    name: req.body.name,
    uri: 'lists/' + id,
    memberCount: 0,
  };

  lists.push(newList);

  res.json(newList);
}

let lastId = 4;
const lists = [
  {
    id: '1',
    name: 'a fake list 1',
    uri: 'lists/1',
    memberCount: 21,
  },
  {
    id: '2',
    name: 'a fake list 2',
    uri: 'lists/2',
    memberCount: 22,
  },
  {
    id: '3',
    name: 'a fake list 3',
    uri: 'lists/3',
    memberCount: 23,
  },
  {
    id: '4',
    name: 'a fake list 4',
    uri: 'lists/4',
    memberCount: 24,
  },
];
