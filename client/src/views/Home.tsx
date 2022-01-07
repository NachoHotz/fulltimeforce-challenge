import CommitItem from '../components/CommitItem';
import style from './Home.module.css';

type HomeProps = {
  commits: Array<any>;
};

export default function Home({ commits }: HomeProps) {
  return (
    <div>
      <header className={style.header}>
        <h2>fulltimeforce-challenge commits history</h2>
        <h4>
          By{' '}
          <a
            href="https://github.com/NachoHotz/fulltimeforce-challenge"
            target="_blank"
            rel="noopener noreferer"
          >
            Nacho Hotz
          </a>
        </h4>
      </header>
      <main className={style.mainContainer}>
        {commits.map((commit) => {
          return (
            <CommitItem
              key={commit.sha}
              sha={commit.sha}
              authorName={commit.commit.author.name}
              authorEmail={commit.commit.author.email}
              date={commit.commit.author.date}
              message={commit.commit.message}
            />
          );
        })}
      </main>
    </div>
  );
}
