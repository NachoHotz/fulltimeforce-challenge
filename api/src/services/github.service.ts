import axios from 'axios';
import { endpoints } from '../constants/endpoints';
import { CommitInfo } from '../types/commit';

const { API_URL } = endpoints;

const getCommits = async () => {
  try {
    const { data } = await axios.get<CommitInfo[]>(`${API_URL}`);

    return data;
  } catch (e) {
    console.error(e);
  }
};

export default getCommits;
