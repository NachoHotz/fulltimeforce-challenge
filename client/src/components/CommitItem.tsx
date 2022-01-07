import style from './CommitItem.module.css';

type CommitItemProps = {
  sha: string;
  authorName: string;
  authorEmail: string;
  date: string;
  message: string;
};

export default function CommitItem({
  sha,
  authorName,
  authorEmail,
  date,
  message,
}: CommitItemProps) {
  const dateFormatted = new Date(date);
  return (
    <article className={style.commitContainer}>
      <section className={style.miscContainer}>
        <h4>{sha}</h4>
        <h4>{`${dateFormatted.getDay()}/${
          dateFormatted.getMonth() + 1
        }/${dateFormatted.getFullYear()} - ${dateFormatted.getHours()}:${dateFormatted.getMinutes()}:${dateFormatted.getSeconds()}`}</h4>
      </section>
      <section className={style.authorInfo}>
        <p>{authorName}</p>
        <p> - ({authorEmail})</p>
      </section>
      <p className={style.commitMessage}>{message}</p>
    </article>
  );
}
