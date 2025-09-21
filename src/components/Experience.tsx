import { Grid, Typography } from "antd";
import { motion } from "framer-motion";
import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import { experience } from "../data/experince";

const { Title, Text } = Typography;
const { useBreakpoint } = Grid;

const Experience: React.FC = () => {
  const screens = useBreakpoint();
  const { isDarkMode } = useTheme();

  // Modern Glass Container
  const containerStyle: React.CSSProperties = {
    position: "relative",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    padding: screens.lg ? "4rem 2rem" : screens.md ? "3rem 1.5rem" : "2rem 1rem",
    maxWidth: "1400px",
    margin: "0 auto",
    background: "transparent",
    overflow: "hidden",
  };

  // Glass Effect Background
  const glassBackgroundStyle: React.CSSProperties = {
    position: "absolute",
    inset: "0",
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
        0 0 0 1px rgba(16, 185, 129, 0.05)
      `
      : `
        0 32px 64px rgba(0, 0, 0, 0.1),
        inset 0 1px 0 rgba(255, 255, 255, 0.8),
        0 0 0 1px rgba(16, 185, 129, 0.1)
      `,
    zIndex: -1,
  };

  // Header Section
  const headerStyle: React.CSSProperties = {
    textAlign: "center",
    marginBottom: screens.lg ? "4rem" : screens.md ? "3rem" : "2.5rem",
    position: "relative",
    zIndex: 2,
  };

  const mainTitleStyle: React.CSSProperties = {
    fontSize: screens.lg ? "clamp(3rem, 4vw, 4rem)" : screens.md ? "2.8rem" : "2.2rem",
    fontWeight: "800",
    marginBottom: "1rem",
    background: "linear-gradient(135deg, #10b981 0%, #3b82f6 50%, #8b5cf6 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    lineHeight: "1.1",
    letterSpacing: "-0.02em",
    position: "relative",
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: screens.lg ? "1.3rem" : screens.md ? "1.2rem" : "1.1rem",
    color: isDarkMode ? "#94a3b8" : "#64748b",
    maxWidth: "600px",
    margin: "0 auto",
    lineHeight: "1.6",
    fontWeight: "400",
    opacity: 0.9,
  };

  // Timeline Container
  const timelineContainerStyle: React.CSSProperties = {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    gap: screens.lg ? "3rem" : screens.md ? "2.5rem" : "2rem",
    zIndex: 2,
  };

  // Experience Card Styles
  const experienceCardStyle: React.CSSProperties = {
    position: "relative",
    background: isDarkMode
      ? `linear-gradient(135deg, 
          rgba(30, 41, 59, 0.6) 0%, 
          rgba(39, 39, 42, 0.4) 50%,
          rgba(30, 41, 59, 0.6) 100%)`
      : `linear-gradient(135deg, 
          rgba(255, 255, 255, 0.8) 0%, 
          rgba(248, 250, 252, 0.6) 50%,
          rgba(255, 255, 255, 0.8) 100%)`,
    backdropFilter: "blur(15px) saturate(150%)",
    borderRadius: screens.lg ? "24px" : screens.md ? "20px" : "16px",
    border: `1px solid ${isDarkMode
      ? "rgba(255, 255, 255, 0.1)"
      : "rgba(0, 0, 0, 0.08)"}`,
    padding: screens.lg ? "2.5rem" : screens.md ? "2rem" : "1.5rem",
    boxShadow: isDarkMode
      ? `
        0 20px 40px rgba(0, 0, 0, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.1),
        0 0 0 1px rgba(16, 185, 129, 0.05)
      `
      : `
        0 20px 40px rgba(0, 0, 0, 0.08),
        inset 0 1px 0 rgba(255, 255, 255, 0.9),
        0 0 0 1px rgba(16, 185, 129, 0.08)
      `,
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    overflow: "hidden",
  };

  // Date Badge Styles
  const dateBadgeStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    padding: screens.lg ? "0.75rem 1.5rem" : "0.6rem 1.2rem",
    background: isDarkMode
      ? "linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(5, 150, 105, 0.15))"
      : "linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(5, 150, 105, 0.1))",
    border: `1px solid ${isDarkMode ? "rgba(16, 185, 129, 0.3)" : "rgba(16, 185, 129, 0.2)"}`,
    borderRadius: "50px",
    color: "#10b981",
    fontSize: screens.lg ? "0.9rem" : "0.8rem",
    fontWeight: "600",
    letterSpacing: "0.5px",
    textTransform: "uppercase",
    marginBottom: "1.5rem",
    backdropFilter: "blur(10px)",
    boxShadow: "0 4px 12px rgba(16, 185, 129, 0.1)",
  };

  // Role and Company Styles
  const roleStyle: React.CSSProperties = {
    fontSize: screens.lg ? "1.8rem" : screens.md ? "1.6rem" : "1.4rem",
    fontWeight: "700",
    color: isDarkMode ? "#ffffff" : "#1f2937",
    marginBottom: "0.5rem",
    lineHeight: "1.2",
    letterSpacing: "-0.01em",
  };

  const companyStyle: React.CSSProperties = {
    fontSize: screens.lg ? "1.2rem" : "1.1rem",
    color: "#10b981",
    fontWeight: "600",
    marginBottom: "2rem",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  };

  // Projects Grid
  const projectsGridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: screens.lg ? "repeat(auto-fit, minmax(400px, 1fr))" : "1fr",
    gap: screens.lg ? "1.5rem" : "1.25rem",
    marginTop: "1rem",
  };

  // Project Card Styles
  const projectCardStyle: React.CSSProperties = {
    background: isDarkMode
      ? `linear-gradient(135deg, 
          rgba(15, 23, 42, 0.8) 0%, 
          rgba(30, 41, 59, 0.6) 100%)`
      : `linear-gradient(135deg, 
          rgba(255, 255, 255, 0.9) 0%, 
          rgba(248, 250, 252, 0.7) 100%)`,
    backdropFilter: "blur(10px)",
    borderRadius: screens.lg ? "16px" : "12px",
    border: `1px solid ${isDarkMode
      ? "rgba(16, 185, 129, 0.15)"
      : "rgba(16, 185, 129, 0.1)"}`,
    borderLeft: `4px solid #10b981`,
    padding: screens.lg ? "1.5rem" : "1.25rem",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    position: "relative",
    overflow: "hidden",
  };

  const projectTitleStyle: React.CSSProperties = {
    fontSize: screens.lg ? "1.1rem" : "1rem",
    fontWeight: "600",
    color: isDarkMode ? "#e2e8f0" : "#374151",
    marginBottom: "1rem",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  };

  const taskListStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
  };

  const taskItemStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "flex-start",
    gap: "0.75rem",
    fontSize: screens.lg ? "0.95rem" : "0.9rem",
    lineHeight: "1.6",
    color: isDarkMode ? "#cbd5e1" : "#4b5563",
    fontWeight: "400",
  };

  const bulletStyle: React.CSSProperties = {
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #10b981, #059669)",
    marginTop: "0.6rem",
    flexShrink: 0,
    boxShadow: "0 2px 4px rgba(16, 185, 129, 0.3)",
  };

  return (
    <motion.section
      id="experience"
      initial={ { opacity: 0, y: 50 } }
      whileInView={ { opacity: 1, y: 0 } }
      transition={ {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      } }
      viewport={ { once: true, margin: "-100px" } }
      style={ containerStyle }
    >
      {/* Animated Background Elements */ }
      <motion.div
        style={ {
          position: "absolute",
          top: "15%",
          right: "10%",
          width: screens.lg ? "300px" : "200px",
          height: screens.lg ? "300px" : "200px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(59, 130, 246, 0.1))",
          filter: "blur(60px)",
          zIndex: 0,
        } }
        animate={ {
          y: [0, -30, 0],
          x: [0, 15, 0],
        } }
        transition={ {
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        } }
      />

      <motion.div
        style={ {
          position: "absolute",
          bottom: "20%",
          left: "5%",
          width: screens.lg ? "250px" : "150px",
          height: screens.lg ? "250px" : "150px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(16, 185, 129, 0.1))",
          filter: "blur(40px)",
          zIndex: 0,
        } }
        animate={ {
          y: [0, 25, 0],
          x: [0, -10, 0],
        } }
        transition={ {
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        } }
      />

      {/* Glass Background */ }
      <motion.div
        style={ glassBackgroundStyle }
        initial={ { opacity: 0, scale: 0.9 } }
        whileInView={ { opacity: 1, scale: 1 } }
        transition={ { duration: 0.8, delay: 0.2 } }
        viewport={ { once: true } }
      />

      {/* Header Section */ }
      <motion.div
        style={ headerStyle }
        initial={ { opacity: 0, y: 30 } }
        whileInView={ { opacity: 1, y: 0 } }
        transition={ { duration: 0.6, delay: 0.3 } }
        viewport={ { once: true } }
      >
        <Title style={ mainTitleStyle }>
          Professional Experience
        </Title>
        <Text style={ subtitleStyle }>
          A journey through innovative projects and technological excellence,
          building scalable solutions that impact thousands of users worldwide.
        </Text>
      </motion.div>

      {/* Experience Timeline */ }
      <div style={ timelineContainerStyle }>
        { experience.map((item, index) => (
          <motion.div
            key={ index }
            initial={ { opacity: 0, y: 60, scale: 0.9 } }
            whileInView={ { opacity: 1, y: 0, scale: 1 } }
            transition={ {
              duration: 0.8,
              delay: index * 0.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            } }
            viewport={ { once: true, margin: "-50px" } }
            style={ experienceCardStyle }
            whileHover={ {
              scale: screens.lg ? 1.02 : 1.01,
              y: -5,
              transition: { duration: 0.3 },
            } }
            onMouseEnter={ (e) => {
              if (screens.lg) {
                e.currentTarget.style.boxShadow = isDarkMode
                  ? `0 32px 64px rgba(0, 0, 0, 0.4), 
                     inset 0 1px 0 rgba(255, 255, 255, 0.15),
                     0 0 0 1px rgba(16, 185, 129, 0.1)`
                  : `0 32px 64px rgba(0, 0, 0, 0.12), 
                     inset 0 1px 0 rgba(255, 255, 255, 1),
                     0 0 0 1px rgba(16, 185, 129, 0.15)`;
              }
            } }
            onMouseLeave={ (e) => {
              e.currentTarget.style.boxShadow = isDarkMode
                ? `0 20px 40px rgba(0, 0, 0, 0.3),
                   inset 0 1px 0 rgba(255, 255, 255, 0.1),
                   0 0 0 1px rgba(16, 185, 129, 0.05)`
                : `0 20px 40px rgba(0, 0, 0, 0.08),
                   inset 0 1px 0 rgba(255, 255, 255, 0.9),
                   0 0 0 1px rgba(16, 185, 129, 0.08)`;
            } }
          >
            {/* Date Badge */ }
            <motion.div
              style={ dateBadgeStyle }
              whileHover={ {
                scale: 1.05,
                boxShadow: "0 6px 20px rgba(16, 185, 129, 0.2)",
              } }
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M8 2V6M16 2V6M3 10H21M5 4H19C20.1046 4 21 4.89543 21 6V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V6C3 4.89543 3.89543 4 5 4Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              { item.duration }
            </motion.div>

            {/* Role Title */ }
            <motion.div
              initial={ { opacity: 0, x: -20 } }
              whileInView={ { opacity: 1, x: 0 } }
              transition={ { duration: 0.6, delay: index * 0.2 + 0.2 } }
              viewport={ { once: true } }
            >
              <Title level={ 2 } style={ roleStyle }>
                { item.role }
              </Title>
            </motion.div>

            {/* Company */ }
            <motion.div
              style={ companyStyle }
              initial={ { opacity: 0, x: -20 } }
              whileInView={ { opacity: 1, x: 0 } }
              transition={ { duration: 0.6, delay: index * 0.2 + 0.3 } }
              viewport={ { once: true } }
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M3 21H21M5 21V7L12 3L19 7V21M9 9H10M14 9H15M9 13H10M14 13H15M9 17H10M14 17H15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              { item.company }
            </motion.div>

            {/* Projects Grid */ }
            <motion.div
              style={ projectsGridStyle }
              initial={ { opacity: 0 } }
              whileInView={ { opacity: 1 } }
              transition={ { duration: 0.6, delay: index * 0.2 + 0.4 } }
              viewport={ { once: true } }
            >
              { item.description.map((project, pIdx) => (
                <motion.div
                  key={ pIdx }
                  style={ projectCardStyle }
                  initial={ { opacity: 0, y: 20 } }
                  whileInView={ { opacity: 1, y: 0 } }
                  transition={ {
                    duration: 0.5,
                    delay: index * 0.2 + pIdx * 0.1 + 0.5,
                  } }
                  viewport={ { once: true } }
                  whileHover={ {
                    scale: 1.02,
                    borderColor: isDarkMode
                      ? "rgba(16, 185, 129, 0.3)"
                      : "rgba(16, 185, 129, 0.2)",
                    transition: { duration: 0.2 },
                  } }
                >
                  {/* Project Title */ }
                  <div style={ projectTitleStyle }>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M7 8H17M7 12H17M7 16H12M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    { project.project }
                  </div>

                  {/* Tasks List */ }
                  <div style={ taskListStyle }>
                    { project.tasks.map((task, tIdx) => (
                      <motion.div
                        key={ tIdx }
                        style={ taskItemStyle }
                        initial={ { opacity: 0, x: -10 } }
                        whileInView={ { opacity: 1, x: 0 } }
                        transition={ {
                          duration: 0.4,
                          delay: index * 0.2 + pIdx * 0.1 + tIdx * 0.1 + 0.6,
                        } }
                        viewport={ { once: true } }
                      >
                        <div style={ bulletStyle } />
                        <span>{ task }</span>
                      </motion.div>
                    )) }
                  </div>
                </motion.div>
              )) }
            </motion.div>
          </motion.div>
        )) }
      </div>
    </motion.section>
  );
};

export default Experience;