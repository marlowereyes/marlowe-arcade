import Image from "next/image";
import styles from "../../styles/Profile.module.css";
import BackLink from "../../../components/BackLink";
import Button from "../../../components/Button";

export default function Profile() {
  return (
    <>
      <BackLink href="/" pag="HOME" className={styles.backLink} />
      <main className={styles.main}>
        <section className={styles.name}>
          <h2>Enter your gamer name</h2>
          <input placeholder="ex. bbblacksheep" className={styles.input} />
        </section>
        <section className={styles.character}>
          <h2>Choose your character</h2>
          <div className={styles.characterContainer}>
            <Image
              src="/images/p1.png"
              layout="responsive"
              width={416}
              height={827}
              alt="altText"
              className={styles.image}
            />
            <Image
              src="/images/p2.png"
              layout="responsive"
              width={377}
              height={826}
              alt="altText"
              className={styles.image}
            />
            <Image
              src="/images/p3.png"
              layout="responsive"
              width={416}
              height={825}
              alt="altText"
              className={styles.image}
            />
            <Image
              src="/images/p4.png"
              layout="responsive"
              width={491}
              height={825}
              alt="altText"
              className={styles.image}
            />
          </div>
        </section>
        <div className={styles.submitButton}>
        <Button href="/" buttonText="Submit" />
        </div>
      </main>
    </>
  );
}
