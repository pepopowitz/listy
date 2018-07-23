import axios from 'axios';

export default async function getLists() {
  const response = await axios.get('/api/lists');

  return response.data;
}