"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../../styles/Crossword.module.css";
import BackLink from "../../../components/BackLink";

export default function Crossword() {
  const [name, setName] = useState("");
  const [imageName, setImageName] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("playerName");
    const storedImage = localStorage.getItem("playerImage");

    if (storedName) setName(storedName);
    if (storedImage) setImageName(storedImage);
  }, []);

  return (
    <>
      <BackLink href="/" pag="HOME" className={styles.backLink} />
      <main>
        <div className={styles.hello}>
          {name && (
            <h1>
              Hello, <span className={styles.helloSpan}> {name} </span> 🕹️
            </h1>
          )}
          <div className={styles.characterOnboarding}>
            {imageName && (
              <Image
                src={`/images/${imageName}.png`}
                alt={`Selected Character: ${imageName}`}
                width={106}
                height={132}
              />
            )}
            <div><h1>!</h1></div>
          </div>
        </div>
      </main>
    </>
  );
}
