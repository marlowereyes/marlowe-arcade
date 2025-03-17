import styles from "./BackLink.module.css";
import Link from "next/link";

export default function BackLink({ href }) {
  return (
    <>
      <button className={styles.button}>
        <Link href={href} className={styles.arrow}>←</Link>
      </button>
    </>
  );
}
