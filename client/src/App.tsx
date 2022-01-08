import { useEffect, useState } from 'react';
import axios from 'axios';
import Home from './views/Home';

function App() {
  const [commits, setCommits] = useState([]);

  const fetchCommits = async () => {
    try {
      const { data } = await axios.get(
        'https://fulltimeforce-challenge-api.herokuapp.com/github',
      );
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
