"use client";

import { useState, useRef, useEffect } from "react";
import BackLink from "../../../components/BackLink";
import styles from "../../styles/Crossword.module.css";
import Image from "next/image";

const crosswordData = [
  { question: "Who is Marlowe’s favourite singer who is known for her Grammy award winning song ‘drivers license’?", answer: "OLIVIARODRIGO" },
  { question: "What is Marlowe’s favourite animal that is known for its black spots?", answer: "COW" },
  { question: "What is Marlowe’s favourite flower that was commonly used in ‘love potions’ in the 19th century?", answer: "PANSY" },
  { question: "What is Marlowe’s hobby?", answer: "DANCING" },
  { question: "What school did Marlowe attend to take the Digital Design & Development program?", answer: "BCIT" },
  { question: "What is Marlowe’s favourite food which originated in Japan?", answer: "SUSHI" },
  { question: "How many siblings does Marlowe have?", answer: "FOUR" },
];

export default function Crossword() {
  const [name, setName] = useState("");
  const [imageName, setImageName] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("playerName");
    const storedImage = localStorage.getItem("playerImage");

    if (storedName) setName(storedName);
    if (storedImage) setImageName(storedImage);
  }, []);

  const [inputs, setInputs] = useState(
    crosswordData.map(({ answer }) => Array(answer.length).fill(""))
  );

  const inputRefs = useRef(
    crosswordData.map(({ answer }) => Array(answer.length).fill(null))
  );

  const handleChange = (event, wordIndex, letterIndex) => {
    const value = event.target.value.toUpperCase();
    if (value.length > 1) return; 
  
    const newInputs = [...inputs];
    newInputs[wordIndex][letterIndex] = value;
    setInputs(newInputs);
  
    if (value && letterIndex < newInputs[wordIndex].length - 1) {
      inputRefs.current[wordIndex][letterIndex + 1]?.focus();
    }
  };  

  const handleKeyDown = (event, wordIndex, letterIndex) => {
    if (event.key === "ArrowLeft" && letterIndex > 0) {
      const prevInput = inputRefs.current[wordIndex][letterIndex - 1];
      prevInput?.focus();
      setTimeout(() => prevInput?.setSelectionRange(1, 1), 0); 
    } else if (
      event.key === "ArrowRight" &&
      letterIndex < inputs[wordIndex].length - 1
    ) {
      const nextInput = inputRefs.current[wordIndex][letterIndex + 1];
      nextInput?.focus();
      setTimeout(() => nextInput?.setSelectionRange(1, 1), 0); 
    }
  };  

  return (
    <>
      <BackLink href="/" pag="HOME" className={styles.backLink} />
      <main className={styles.crosswordContainer}>
        {crosswordData.map(({ question, answer }, wordIndex) => (
          <div key={wordIndex} className={styles.questionBlock}>
            <p>{question}</p>
            <div className={styles.inputContainer}>
              {answer.split("").map((letter, letterIndex) => (
                <input
                  key={letterIndex}
                  type="text"
                  maxLength="1"
                  ref={(el) => (inputRefs.current[wordIndex][letterIndex] = el)}
                  value={inputs[wordIndex][letterIndex]}
                  onChange={(e) => handleChange(e, wordIndex, letterIndex)}
                  onKeyDown={(e) => handleKeyDown(e, wordIndex, letterIndex)}
                  className={
                    inputs[wordIndex][letterIndex] === letter
                      ? styles.correct
                      : ""
                  }
                />
              ))}
            </div>
          </div>
        ))}
        
        {name && (
          <h1>
            Hello, <span className={styles.helloSpan}>{name}</span>
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
        </div>
      </main>
    </>
  );
}
