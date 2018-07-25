import axios from 'axios';

export default async function (friend, list) {
  await axios.post(`/api/lists/${list.id}/friends/add?friendId=${friend.id}`);
}