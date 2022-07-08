import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.logoBox}>
          <Image
            className={styles.logo}
            src={'/companylogo.svg'}
            width={80}
            height={80}
          />
        </div>
        <div className={styles.mainContent}>
          <h1 className={styles.mainHeading}>
            Into The Wild Adventures
          </h1>
          <h3 className={styles.subHeading}>
            A modern wilderness travelling agency
          </h3>
          <Link href="#">
            <a className={styles.btn}>
              Our tours
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
