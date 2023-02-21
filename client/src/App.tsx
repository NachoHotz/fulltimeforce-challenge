import { useEffect, useState } from 'react';
import { getCommits } from './handler/getInfo';
import { CommitInfo } from './types/CommitInfo';
import Home from './views/Home';

function App() {
  const [commits, setCommits] = useState<CommitInfo[]>([]);

  const fetchCommits = async () => {
    try {
      const { data } = await getCommits()
      setCommits(data);
    } catch (e) {
      console.error('GET_COMMITS_ERROR', { e });
    }
  };

  useEffect(() => {
    fetchCommits();
  }, []);

  return (
    <div>
      <Home commits={commits} />
    </div>
  );
}

export default App;
