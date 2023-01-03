import Header from '../components/Header/Header';
import CommitItem from '../components/CommitItem/CommitItem';
import { CommitInfo } from '../types/CommitInfo';
import style from './Home.module.css';

type HomeProps = {
  commits: Array<CommitInfo>;
};

export default function Home({ commits }: HomeProps) {
  return (
    <div>
      <Header />
      <main className={style.mainContainer}>
        {commits.length === 0 && (
          <h4 className={style.noCommits}>Loading...</h4>
        )}
        {commits.map((commit) => {
          return (
            <CommitItem
              key={commit.sha}
              sha={commit.sha}
              authorName={commit.commit.author.name}
              authorEmail={commit.commit.author.email}
              date={commit.commit.author.date.toString()}
              message={commit.commit.message}
            />
          );
        })}
      </main>
    </div>
  );
}
