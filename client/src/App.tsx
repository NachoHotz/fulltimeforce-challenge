import { useEffect, useState } from 'react';
import { getCommits } from './handler/getInfo';
import Home from './views/Home';

function App() {
  const [commits, setCommits] = useState([]);

  const fetchCommits = async () => {
    try {
      const { data } = await getCommits()
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
