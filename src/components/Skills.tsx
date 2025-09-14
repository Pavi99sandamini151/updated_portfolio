import React from "react";
import SkillCard from "./SkillCard";
import { skills } from "../data/skills";
import { motion } from "framer-motion";

const Skills: React.FC = () => (
  <motion.section
    id="skills"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true, amount: 0.3 }}
    style={{ padding: "2rem 1rem" }}
  >
    <h2
      style={{
        fontSize: "2.5rem",
        fontWeight: 600,
        marginBottom: "1.5rem",
        textAlign: "left",
      }}
    >
      Skills
    </h2>

    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "1.5rem",
      }}
    >
      {skills.map((skill, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 0 3px rgb(106, 208, 143)", // blue border effect
            borderRadius: 12,
          }}
          transition={{ duration: 0.3, delay: i * 0.1 }}
          viewport={{ once: true }}
          style={{ cursor: "pointer", borderRadius: 12 }}
        >
          <SkillCard
            src={`/skill-logos/${skill.toLowerCase().replace(/\s/g, "")}.svg`}
            alt={skill}
          />
        </motion.div>
      ))}
    </div>
  </motion.section>
);

export default Skills;
