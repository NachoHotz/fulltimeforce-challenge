import CommitItem from '../components/CommitItem';

type HomeProps = {
  commits: Array<any>;
};

export default function Home({ commits }: HomeProps) {
  return (
    <div>
      <h2>fulltimeforce-challenge commits history</h2>
      {commits.map((commit) => {
        return <CommitItem commit={commit} />;
      })}
    </div>
  );
}
