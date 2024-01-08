import React from "react";
import styles from "./Resume.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

export const Resume = () => {
  const resumeUrl =
    "https://drive.google.com/file/d/15wifCdttgTQH6ysiNeX8mKfSXmVtXsgg/view?usp=sharing";

  return (
    <section className={styles.container} id="resume">
      <h2 className={styles.title}>My Resume</h2>
      <div className={styles.resumeContent}>
        <p>
          Here you can download my resume to learn more about my skills and
          experience.
        </p>
      </div>
      <div className={styles.resumeBtn}>
        <a
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          download="YourResume.pdf"
          className={styles.resumeButton}
        >
          <FontAwesomeIcon icon={faDownload} className={styles.downloadIcon} />
          Download Resume
        </a>
      </div>
    </section>
  );
};
