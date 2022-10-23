//components/Pagination.js
import Link from 'next/link';
import styles from './pagination.module.css'

export const Pagination = ({ totalCount, DIR }: {totalCount:number,DIR:string}) => {
  const PER_PAGE = 10;
  const range = (start:number, end:number ) =>
        [...Array(end - start + 1)].map((_, i) => start + i)

  return (
    <ul className={ styles.flex}>
      {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
        <li className={styles.li } key={index}>
          <Link href={ `${DIR}${number}`}>
            <a>{number}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};
