import { Grid } from "antd";
import { motion } from "framer-motion";
import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import SkillCard from "./SkillCard";

const { useBreakpoint } = Grid;

// Skill categories for better organization
const skillCategories = {
  "Programming Languages": ["TypeScript", "JavaScript", "Python", "Java"],
  "Frontend Development": ["React", "Next", "Vite", "Html", "Css", "Sass", "Tailwind", "Antd"],
  "Backend Development": ["Nodejs", "Express", "Moleculer"],
  "Databases": ["Postgres", "Mysql", "Mongodb", "Firebase", "Mssql"],
  "Cloud & DevOps": ["Aws", "Azure", "Docker", "Kubernetes", "Terraform"],
  "Development Tools": ["Git", "Gitlab", "Postman", "Swagger", "Mocha", "Linux", "Confluence", "Jira"]
};

const Skills: React.FC = () => {
  const screens = useBreakpoint();
  const { isDarkMode } = useTheme();

  // Full-Width Modern Container
  const containerStyle: React.CSSProperties = {
    position: "relative",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    padding: screens.lg ? "4rem 0" : screens.md ? "3rem 0" : "2rem 0",
    width: "100%",
    background: "transparent",
    overflow: "hidden",
  };

  // Full-Width Glass Effect Background
  const glassBackgroundStyle: React.CSSProperties = {
    position: "absolute",
    left: screens.lg ? "2rem" : screens.md ? "1.5rem" : "1rem",
    right: screens.lg ? "2rem" : screens.md ? "1.5rem" : "1rem",
    top: "0",
    bottom: "0",
    background: isDarkMode
      ? `linear-gradient(135deg, 
          rgba(24, 24, 27, 0.85) 0%, 
          rgba(39, 39, 42, 0.75) 25%,
          rgba(24, 24, 27, 0.85) 50%,
          rgba(39, 39, 42, 0.75) 75%,
          rgba(24, 24, 27, 0.85) 100%)`
      : `linear-gradient(135deg, 
          rgba(255, 255, 255, 0.9) 0%, 
          rgba(248, 250, 252, 0.8) 25%,
          rgba(255, 255, 255, 0.9) 50%,
          rgba(248, 250, 252, 0.8) 75%,
          rgba(255, 255, 255, 0.9) 100%)`,
    backdropFilter: "blur(20px) saturate(180%)",
    borderRadius: screens.lg ? "32px" : screens.md ? "28px" : "24px",
    border: `1px solid ${isDarkMode
      ? "rgba(255, 255, 255, 0.1)"
      : "rgba(0, 0, 0, 0.1)"}`,
    boxShadow: isDarkMode
      ? `
        0 32px 64px rgba(0, 0, 0, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.1),
        0 0 0 1px rgba(255, 255, 255, 0.05)`
      : `
        0 32px 64px rgba(0, 0, 0, 0.1),
        inset 0 1px 0 rgba(255, 255, 255, 0.8),
        0 0 0 1px rgba(0, 0, 0, 0.05)`,
  };

  // Section Header Style
  const headerStyle: React.CSSProperties = {
    position: "relative",
    zIndex: 10,
    marginBottom: screens.lg ? "3rem" : screens.md ? "2.5rem" : "2rem",
    textAlign: "center",
    padding: `0 ${screens.lg ? "4rem" : screens.md ? "3rem" : "2rem"}`,
  };

  const titleStyle: React.CSSProperties = {
    fontSize: screens.lg ? "clamp(3rem, 4vw, 4rem)" : screens.md ? "2.8rem" : "2.2rem",
    fontWeight: "800",
    background: "linear-gradient(135deg, #10b981 0%, #3b82f6 50%, #8b5cf6 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    marginBottom: "1rem",
    letterSpacing: "-0.02em",
    lineHeight: "1.1",
    position: "relative",
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: screens.lg ? "1.3rem" : screens.md ? "1.2rem" : "1.1rem",
    color: isDarkMode ? "#94a3b8" : "#64748b",
    fontWeight: "400",
    maxWidth: "600px",
    margin: "0 auto",
    lineHeight: "1.6",
    opacity: 0.9,
  };

  // Horizontal Skills Content Container
  const skillsContentStyle: React.CSSProperties = {
    position: "relative",
    zIndex: 10,
    display: "flex",
    flexDirection: "column",
    gap: screens.lg ? "2rem" : screens.md ? "1.5rem" : "1.25rem",
    padding: `0 ${screens.lg ? "2rem" : screens.md ? "1.5rem" : "1rem"}`,
  };

  // Responsive Categories Grid Container
  const categoriesContainerStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: screens.lg
      ? "repeat(3, 1fr)"
      : screens.md
        ? "repeat(2, 1fr)"
        : "1fr",
    gap: screens.lg ? "1.5rem" : screens.md ? "1.25rem" : "1rem",
    width: "100%",
  };

  // Responsive Category Card Style
  const categorySectionStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: screens.lg ? "1.25rem" : "1rem",
    padding: screens.lg ? "1.75rem" : screens.md ? "1.5rem" : "1.25rem",
    background: isDarkMode
      ? "rgba(30, 30, 35, 0.4)"
      : "rgba(255, 255, 255, 0.5)",
    borderRadius: screens.lg ? "20px" : "16px",
    border: `1px solid ${isDarkMode
      ? "rgba(255, 255, 255, 0.1)"
      : "rgba(0, 0, 0, 0.06)"}`,
    backdropFilter: "blur(16px) saturate(180%)",
    width: "100%",
    height: "fit-content",
    boxShadow: isDarkMode
      ? `
        0 8px 32px rgba(0, 0, 0, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.1)`
      : `
        0 8px 32px rgba(0, 0, 0, 0.08),
        inset 0 1px 0 rgba(255, 255, 255, 0.9)`,
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  };

  // Category Title Style
  const categoryTitleStyle: React.CSSProperties = {
    fontSize: screens.lg ? "1.2rem" : screens.md ? "1.1rem" : "1rem",
    fontWeight: "700",
    color: isDarkMode ? "#ffffff" : "#1e293b",
    marginBottom: "0",
    display: "flex",
    alignItems: "center",
    gap: "0.625rem",
    position: "relative",
    letterSpacing: "-0.01em",
  };

  const categoryIconStyle: React.CSSProperties = {
    width: screens.lg ? "20px" : "18px",
    height: screens.lg ? "20px" : "18px",
    background: "linear-gradient(135deg, #10b981 0%, #3b82f6 100%)",
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#ffffff",
    fontSize: screens.lg ? "10px" : "9px",
    fontWeight: "bold",
    flexShrink: 0,
  };

  // Optimized Skills Grid Style
  const skillsGridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: screens.lg
      ? "repeat(auto-fit, minmax(72px, 1fr))"
      : screens.md
        ? "repeat(auto-fit, minmax(64px, 1fr))"
        : "repeat(auto-fit, minmax(56px, 1fr))",
    gap: screens.lg ? "1rem" : screens.md ? "0.875rem" : "0.75rem",
    justifyItems: "center",
    alignItems: "start",
    width: "100%",
  };

  // Category icons mapping
  const categoryIcons: { [key: string]: string } = {
    "Programming Languages": "💻",
    "Frontend Development": "🎨",
    "Backend Development": "⚙️",
    "Databases": "🗄️",
    "Cloud & DevOps": "☁️",
    "Development Tools": "🛠️"
  };

  return (
    <motion.section
      id="skills"
      initial={ { opacity: 0 } }
      whileInView={ { opacity: 1 } }
      transition={ { duration: 0.8, ease: "easeOut" } }
      viewport={ { once: true, margin: "-10%" } }
      style={ containerStyle }
    >
      {/* Glass Background */ }
      <motion.div
        initial={ { opacity: 0, scale: 0.95 } }
        whileInView={ { opacity: 1, scale: 1 } }
        transition={ { duration: 1, ease: "easeOut" } }
        viewport={ { once: true } }
        style={ glassBackgroundStyle }
      />

      {/* Section Header */ }
      <motion.div
        initial={ { opacity: 0, y: 30 } }
        whileInView={ { opacity: 1, y: 0 } }
        transition={ { duration: 0.8, delay: 0.2 } }
        viewport={ { once: true } }
        style={ headerStyle }
      >
        <h2 style={ titleStyle }>Technical Expertise</h2>
        <p style={ subtitleStyle }>
          Comprehensive skill set spanning modern web technologies, cloud platforms, and development tools
        </p>
      </motion.div>

      {/* Skills Categories */ }
      <div style={ skillsContentStyle }>
        {/* Responsive Categories Grid */ }
        <div style={ categoriesContainerStyle }>
          { Object.entries(skillCategories).map(([category, categorySkills], categoryIndex) => (
            <motion.div
              key={ category }
              initial={ { opacity: 0, y: 40 } }
              whileInView={ { opacity: 1, y: 0 } }
              transition={ {
                duration: 0.6,
                delay: categoryIndex * 0.1,
                ease: "easeOut"
              } }
              viewport={ { once: true, margin: "-5%" } }
              whileHover={ {
                scale: 1.02,
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" }
              } }
              style={ categorySectionStyle }
            >
              {/* Category Title */ }
              <div style={ categoryTitleStyle }>
                <div style={ categoryIconStyle }>
                  { categoryIcons[category] }
                </div>
                { category }
              </div>

              {/* Skills Grid */ }
              <div style={ skillsGridStyle }>
                { categorySkills.map((skill, skillIndex) => (
                  <motion.div
                    key={ skill }
                    initial={ { opacity: 0, scale: 0.8 } }
                    whileInView={ { opacity: 1, scale: 1 } }
                    transition={ {
                      duration: 0.4,
                      delay: (categoryIndex * 0.1) + (skillIndex * 0.05),
                      ease: "easeOut"
                    } }
                    viewport={ { once: true, margin: "-10%" } }
                    whileHover={ {
                      scale: 1.1,
                      y: -6,
                      transition: { duration: 0.25, ease: "easeOut" }
                    } }
                    style={ { cursor: "pointer" } }
                  >
                    <SkillCard
                      src={ `/skill-logos/${skill.toLowerCase().replace(/\s/g, "")}.svg` }
                      alt={ skill }
                    />
                  </motion.div>
                )) }
              </div>
            </motion.div>
          )) }
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
