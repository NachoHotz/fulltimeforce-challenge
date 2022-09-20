import { useEffect, useState } from 'react';
import axios from 'axios';
import Home from './views/Home';

function App() {
  const [commits, setCommits] = useState([]);

  const { NODE_ENV, REACT_APP_SERVER_DEV_URL, REACT_APP_SERVER_PROD_URL } = process.env;

  const API_URL = (NODE_ENV === 'development' ? REACT_APP_SERVER_DEV_URL : REACT_APP_SERVER_PROD_URL)

  const fetchCommits = async () => {
    try {
      const { data } = await axios.get(API_URL);
      setCommits(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchCommits();
  }, []);

  return (
    <div className="App">
      <Home commits={commits} />
    </div>
  );
}

export default App;
