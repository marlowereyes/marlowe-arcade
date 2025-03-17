import styles from "./Button.module.css";
import Link from "next/link";

export default function Button({ buttonText, href }) {
  return (
    <>
      <button className={styles.button}>
        <Link href={href}>
          <h3>{buttonText}</h3>
        </Link>
      </button>
    </>
  );
}
