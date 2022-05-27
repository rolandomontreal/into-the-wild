import Image from 'next/image';
import styles from '../styles/Home.module.css'

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
        </div>
      </div>
    </div>
  );
}
