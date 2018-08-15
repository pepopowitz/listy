import axios from 'axios';

export default async function updateList(list) {
  const response = await axios.put(`/api/lists/${list.id}`, list);

  return response.data;
}