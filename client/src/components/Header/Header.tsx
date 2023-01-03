import style from './Header.module.css';

export default function Header() {
  return (
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
  )
}
