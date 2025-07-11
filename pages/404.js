import Link from "next/link";
import styles from "../styles/404.module.css";

export default function Custom404() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.errorNumber}>404</h1>
        <h2 className={styles.title}>Page Not Found</h2>
        <p className={styles.description}>
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        <Link href="/" className={styles.homeButton}>
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
