"use client";

import Image from "next/image";
import styles from "../../styles/Profile.module.css";
import BackLink from "../../../components/BackLink";
import Button from "../../../components/Button";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Profile() {
  const [name, setName] = useState("");
  const [selectedImage, setSelectedImage] = useState("");
  const router = useRouter();

  const handleImageClick = (imageName) => {
    setSelectedImage(imageName);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && selectedImage) {
      localStorage.setItem("playerName", name);
      localStorage.setItem("playerImage", selectedImage);
      
      router.push("/intro");
      router.push("/crossword");
    } else {
      alert("Please enter your name and choose an image.");
    }
  };

  return (
    <>
      <BackLink href="/" pag="HOME" className={styles.backLink} />
      <main>
        <form onSubmit={handleSubmit} className={styles.form}>
          <h2>Enter your gamer name</h2>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="ex. bbblacksheep"
            className={styles.nameInput}
            tabIndex="0"
          />
          <h2>Choose your character</h2>
          <div className={styles.imagesContainer}>
            {["p1", "p2", "p3", "p4"].map((image) => (
              <div
                key={image}
                className={`${styles.imageContainer} ${
                  selectedImage === image ? styles.clicked : ""
                }`}
                onClick={() => handleImageClick(image)}
                onKeyDown={(e) => e.key === "Enter" && handleImageClick(image)}
                tabIndex="0"
              >
                <Image
                  src={`/images/${image}.png`}
                  width={416}
                  height={827}
                  alt={`Character ${image}`}
                  className={styles.image}
                />
              </div>
            ))}
          </div>
          <div className={styles.submitProfile}>
            <Button buttonText="Submit" type="submit" />
          </div>
        </form>
      </main>
    </>
  );
}
