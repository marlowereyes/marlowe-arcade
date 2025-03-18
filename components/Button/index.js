import styles from "./Button.module.css";
import Link from "next/link";

export default function Button({ buttonText, href, onClick, type = "button" }) {
  if (href) {
    return (
      <Link href={href} className={styles.button}>
        <h3>{buttonText}</h3>
      </Link>
    );
  }

  return (
    <button type={type} className={styles.button} onClick={onClick}>
      <h3>{buttonText}</h3>
    </button>
  );
}
