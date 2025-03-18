"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../../styles/Crossword.module.css";

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
    <div className={styles.mainHomeContainer}>
      <div className={styles.homeContainer}>
        {name && (
          <h1>
            <span className={styles.helloSpan}>Hello</span>
            <br /> {name}!
          </h1>
        )}
        {imageName && (
          <Image
            src={`/images/${imageName}.png`}
            alt={`Selected Character: ${imageName}`}
            width={106}
            height={132}
          />
        )}
      </div>
    </div>
  );
}
