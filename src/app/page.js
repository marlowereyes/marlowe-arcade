import styles from "../styles/Page.module.css";
import Gradient from "../../components/Gradient";
import Image from "next/image";
import Button from "../../components/Button";

export default function Home() {
  return (
    <>
      <main>
        <Gradient
          content={
            <>
              <div className={styles.title}>
                <Image
                  src="/images/title.png"
                  layout="responsive"
                  width={950}
                  height={540}
                  alt="altText"
                  className={styles.image}
                />
                <Button buttonText="Start" href="/profile"/>
              </div>
            </>
          }
        />
      </main>
    </>
  );
}
