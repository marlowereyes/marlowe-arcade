"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../../styles/Intro.module.css";
import BackLink from "../../../components/BackLink";
import Link from "next/link";

export default function Intro() {
  const [name, setName] = useState("");
  const [imageName, setImageName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);

  const sections = [
    {
      title: "Welcome to the MARLOWE ARCADE",
      content: (
        <>
          <p>Where you can learn more about the master... Marlowe Reyes</p>
        </>
      ),
    },
    {
      title: "How to Play",
      content: (
        <>
          <ul>
            <li>
              Type the answer to the question below it, one letter per box.
            </li>
            <li>
              If it is correct, it will highlight blue. If not, try again.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Controls",
      content: (
        <>
          <ul>
            <li>Click with mouse to enter the first letter.</li>
            <li>Use Left and Right arrow keys to navigate between boxes.</li>
            <li>Press Delete to erase a letter.</li>
          </ul>
        </>
      ),
    },
    {
      title: "Good Luck and HAVE FUN!",
      content: (
        <>
          <Link href="/crossword">
            <button className={styles.button}>Play Game</button>
          </Link>
        </>
      ),
    },
  ];

  useEffect(() => {
    const storedName = localStorage.getItem("playerName");
    const storedImage = localStorage.getItem("playerImage");

    if (storedName) setName(storedName);
    if (storedImage) setImageName(storedImage);
  }, []);

  const handleNext = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  const handlePrev = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  return (
    <>
      <BackLink href="/" pag="HOME" className={styles.backLink} />
      <main>
        <div className={styles.hello}>
          {name && (
            <h1>
              Hello, <span className={styles.helloSpan}> {name} </span>
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
            <button onClick={() => setIsModalOpen(true)} className={styles.infoButton}>
              <h1>!</h1>
            </button>
          </div>
        </div>
      </main>

      <div className={styles.floor}></div>

      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h2>{sections[currentSection].title}</h2>
            {sections[currentSection].content}

            <div className={styles.navigation}>
              <button
                onClick={handlePrev}
                disabled={currentSection === 0}
                className={`${styles.arrow} ${styles.leftArrow} ${currentSection === 0 ? styles.disabledArrow : ''}`}
              >
                &#8592;
              </button>

              <div className={styles.progressCircles}>
                {sections.map((_, index) => (
                  <div
                    key={index}
                    className={`${styles.circle} ${index === currentSection ? styles.activeCircle : ""}`}
                  ></div>
                ))}
              </div>

              <button
                onClick={handleNext}
                disabled={currentSection === sections.length - 1}
                className={`${styles.arrow} ${styles.rightArrow} ${currentSection === sections.length - 1 ? styles.disabledArrow : ''}`}
              >
                &#8594;
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
