import React from "react";
import styles from "./styles.module.css";
export default function AboutUs() {
  const aboutData = {
    title: "About Us",
    description:
      "We are an e-commerce company dedicated to providing the best products at the best prices.",
    mission:
      "Our mission is to connect customers with the products they love and provide unparalleled service.",
    vision: "To be the most customer-centric e-commerce platform.",
    values: [
      "Customer Satisfaction",
      "Integrity",
      "Innovation",
      "Community Engagement",
    ],
    teamMembers: [
      { name: "Abdussalam", role: "CEO" },
      { name: "Reshdeen Ziad", role: "CTO" },
      { name: "Riza Zayan", role: "CFO" },
    ],
  };
  return (
    <>
      <div className={styles.aboutus}>
        <h1>{aboutData.title}</h1>
        <p>{aboutData.description}</p>
      </div>
      <div className={styles.subtitle}>
        <div className={styles.sub1}>
          <h2>Our Mission</h2>
          <p>{aboutData.mission}</p>
        </div>
        <div className={styles.sub1}>
          <h2>Our Vision</h2>
          <p>{aboutData.vision}</p>
        </div>
        <div className={styles.sub1}>
          <h2>Our Values</h2>

          <ul>
            {aboutData.values.map((value, index) => (
              <li key={index}>{value}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.sub2}>
        <h2 style={{ textAlign: "center" }}>Meet the Team</h2>
        <br />
        <ul>
          {aboutData.teamMembers.map((member, index) => (
            <li key={index}>
              {member.name} - {member.role}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
