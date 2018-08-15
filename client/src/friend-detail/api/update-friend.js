import axios from 'axios';

export default async function updateFriend(friend) {
  const response = await axios.put(`/api/friends/${friend.id}`, friend);

  return response.data;
}