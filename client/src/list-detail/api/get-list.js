import axios from 'axios';

export default async function getList(listId) {
  const response = await axios.get(`/api/lists/${listId}`);

  return response.data;
}