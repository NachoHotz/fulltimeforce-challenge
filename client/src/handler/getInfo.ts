import axios from 'axios'
import { CommitInfo } from '../types/CommitInfo';

const { NODE_ENV, REACT_APP_SERVER_DEV_URL, REACT_APP_SERVER_PROD_URL } = process.env;

const API_URL = NODE_ENV === 'development' ? REACT_APP_SERVER_DEV_URL : REACT_APP_SERVER_PROD_URL

export async function getCommits() {
  return await axios.get<CommitInfo[]>(`${API_URL}`)
}
