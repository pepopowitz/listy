export function index(req, res) {
  res.json([
    {
      id: '123121',
      name: 'a fake list 1',
      uri: 'lists/1',
      memberCount: 21,
    },
    {
      id: '123122',
      name: 'a fake list 2',
      uri: 'lists/2',
      memberCount: 22,
    },
    {
      id: '123123',
      name: 'a fake list 3',
      uri: 'lists/3',
      memberCount: 23,
    },
    {
      id: '123124',
      name: 'a fake list 4',
      uri: 'lists/4',
      memberCount: 24,
    },
  ]);
}
