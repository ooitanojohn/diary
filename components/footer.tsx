import styles from './footer.module.css';
import Link from 'next/link';
import Image from 'next/image';
import loveImg from '../public/favicon.ico';

// footerのレイアウト
function Footer() {
  return (
    <footer>
      <address className={styles.container}>
        <p className={styles.footerMsg}>
          Thank you for watching...
          <Image src={loveImg} alt='love_icon' height={16} width={16}></Image>
        </p>
        <p className={styles.address}>&copy;2022ooitanojohn</p>
      </address>
    </footer>
  );
}

export default Footer;
