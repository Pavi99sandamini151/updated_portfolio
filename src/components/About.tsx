import { Grid, Typography } from "antd";
import { motion } from "framer-motion";
import React from "react";
import { useTheme } from "../contexts/ThemeContext";

const { Title, Text } = Typography;
const { useBreakpoint } = Grid;

const About: React.FC = () => {
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

  // Enhanced Modern Layout Structure
  const contentStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: screens.lg ? "5rem" : screens.md ? "4rem" : "3rem",
    zIndex: 2,
    position: "relative",
  };

  // Hero Section with Profile & Intro
  const heroSectionStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: screens.lg ? "400px 1fr" : "1fr",
    gap: screens.lg ? "5rem" : screens.md ? "3rem" : "2rem",
    alignItems: "center",
    marginBottom: screens.lg ? "3rem" : "2rem",
  };

  // Enhanced Profile Image with Modern Design
  const imageContainerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: screens.lg ? "flex-start" : "center",
    alignItems: "center",
    position: "relative",
    order: screens.lg ? 1 : 1,
  };

  const imageWrapperStyle: React.CSSProperties = {
    position: "relative",
    width: screens.lg ? "380px" : screens.md ? "320px" : "280px",
    height: screens.lg ? "380px" : screens.md ? "320px" : "280px",
    borderRadius: "20px", // Slightly less rounded for square look
    background: isDarkMode
      ? `linear-gradient(135deg, 
          rgba(16, 185, 129, 0.15) 0%, 
          rgba(59, 130, 246, 0.12) 50%,
          rgba(139, 92, 246, 0.15) 100%)`
      : `linear-gradient(135deg, 
          rgba(16, 185, 129, 0.1) 0%, 
          rgba(59, 130, 246, 0.08) 50%,
          rgba(139, 92, 246, 0.1) 100%)`,
    padding: "8px",
    boxShadow: isDarkMode
      ? `
        0 25px 50px rgba(0, 0, 0, 0.25),
        0 0 0 1px rgba(255, 255, 255, 0.05) inset,
        0 0 120px rgba(16, 185, 129, 0.1)
      `
      : `
        0 25px 50px rgba(0, 0, 0, 0.08),
        0 0 0 1px rgba(255, 255, 255, 0.8) inset,
        0 0 120px rgba(16, 185, 129, 0.05)
      `,
    backdropFilter: "blur(20px)",
    border: `1px solid ${isDarkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.05)"}`,
  };

  const imageStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    borderRadius: "12px", // Square-ish with minimal rounding
    objectFit: "cover",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    filter: "brightness(1.05) contrast(1.05) saturate(1.1)",
  };

  // Enhanced Text Content Styles
  const textContainerStyle: React.CSSProperties = {
    order: screens.lg ? 2 : 2,
    display: "flex",
    flexDirection: "column",
    gap: screens.lg ? "2.5rem" : "2rem",
    justifyContent: "center",
  };

  const introSectionStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  };

  const roleTagStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    padding: "0.75rem 1.5rem",
    background: isDarkMode
      ? "linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(5, 150, 105, 0.1))"
      : "linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(5, 150, 105, 0.08))",
    border: `1px solid ${isDarkMode ? "rgba(16, 185, 129, 0.3)" : "rgba(16, 185, 129, 0.2)"}`,
    borderRadius: "50px",
    color: "#10b981",
    fontSize: "0.9rem",
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    alignSelf: "flex-start",
    backdropFilter: "blur(10px)",
    boxShadow: "0 4px 12px rgba(16, 185, 129, 0.1)",
  };

  const nameStyle: React.CSSProperties = {
    fontSize: screens.lg ? "2.5rem" : screens.md ? "2.2rem" : "1.8rem",
    fontWeight: "800",
    background: "linear-gradient(135deg, #10b981 0%, #3b82f6 50%, #8b5cf6 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    lineHeight: "1.2",
    letterSpacing: "-0.02em",
    marginBottom: "1rem",
  };

  const descriptionStyle: React.CSSProperties = {
    fontSize: screens.lg ? "1.15rem" : "1.05rem",
    lineHeight: "1.8",
    color: isDarkMode ? "#e2e8f0" : "#374151",
    fontWeight: "400",
    letterSpacing: "0.01em",
    opacity: 0.9,
    background: "transparent", // Ensure no background
    padding: "0", // Remove any padding that might affect background
  };

  // Skills & Expertise Section
  const skillsSectionStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
  };

  const skillsCategoryStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  };

  const categoryTitleStyle: React.CSSProperties = {
    fontSize: screens.lg ? "1.1rem" : "1rem",
    fontWeight: "600",
    color: isDarkMode ? "#ffffff" : "#1f2937",
    marginBottom: "0.5rem",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  };

  const skillsListStyle: React.CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.75rem",
  };

  const skillTagStyle: React.CSSProperties = {
    padding: "0.5rem 1rem",
    background: isDarkMode
      ? "rgba(30, 41, 59, 0.6)"
      : "rgba(248, 250, 252, 0.8)",
    backdropFilter: "blur(10px)",
    borderRadius: "8px",
    border: `1px solid ${isDarkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.08)"}`,
    fontSize: "0.85rem",
    fontWeight: "500",
    color: isDarkMode ? "#cbd5e1" : "#475569",
    transition: "all 0.2s ease",
  };

  // Achievement Stats Section
  const achievementsSectionStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: screens.lg ? "repeat(4, 1fr)" : screens.md ? "repeat(2, 1fr)" : "1fr",
    gap: screens.lg ? "1.5rem" : "1.25rem",
  };



  return (
    <motion.section
      id="about"
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
          top: "20%",
          right: "8%",
          width: screens.lg ? "280px" : "200px",
          height: screens.lg ? "280px" : "200px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, rgba(16, 185, 129, 0.08), rgba(59, 130, 246, 0.08))",
          filter: "blur(50px)",
          zIndex: 0,
        } }
        animate={ {
          y: [0, -25, 0],
          x: [0, 12, 0],
        } }
        transition={ {
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        } }
      />

      <motion.div
        style={ {
          position: "absolute",
          bottom: "15%",
          left: "8%",
          width: screens.lg ? "220px" : "150px",
          height: screens.lg ? "220px" : "150px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, rgba(139, 92, 246, 0.08), rgba(16, 185, 129, 0.08))",
          filter: "blur(35px)",
          zIndex: 0,
        } }
        animate={ {
          y: [0, 20, 0],
          x: [0, -8, 0],
        } }
        transition={ {
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
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
          About Me
        </Title>
        <Text style={ subtitleStyle }>
          Passionate about creating exceptional digital experiences through code,
          innovation, and continuous learning in the ever-evolving world of technology.
        </Text>
      </motion.div>

      {/* Enhanced Main Content */ }
      <motion.div
        style={ contentStyle }
        initial={ { opacity: 0 } }
        whileInView={ { opacity: 1 } }
        transition={ { duration: 0.8, delay: 0.4 } }
        viewport={ { once: true } }
      >
        {/* Hero Section - Profile & Introduction */ }
        <motion.div
          style={ heroSectionStyle }
          initial={ { opacity: 0, y: 30 } }
          whileInView={ { opacity: 1, y: 0 } }
          transition={ { duration: 0.8, delay: 0.5 } }
          viewport={ { once: true } }
        >
          {/* Enhanced Profile Image */ }
          <motion.div
            style={ imageContainerStyle }
            initial={ { opacity: 0, x: -50, scale: 0.9 } }
            whileInView={ { opacity: 1, x: 0, scale: 1 } }
            transition={ {
              duration: 0.8,
              delay: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94]
            } }
            viewport={ { once: true } }
          >
            {/* Floating Background Elements */ }
            <motion.div
              style={ {
                position: "absolute",
                top: "-50px",
                right: "-50px",
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(59, 130, 246, 0.2))",
                filter: "blur(20px)",
                zIndex: -1,
              } }
              animate={ {
                y: [0, -15, 0],
                x: [0, 10, 0],
              } }
              transition={ {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              } }
            />

            <motion.div
              style={ {
                position: "absolute",
                bottom: "-30px",
                left: "-30px",
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(236, 72, 153, 0.2))",
                filter: "blur(15px)",
                zIndex: -1,
              } }
              animate={ {
                y: [0, 12, 0],
                x: [0, -8, 0],
              } }
              transition={ {
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              } }
            />

            <motion.div
              style={ imageWrapperStyle }
              whileHover={ {
                scale: 1.02,
                boxShadow: isDarkMode
                  ? `0 30px 60px rgba(0, 0, 0, 0.3),
                     0 0 0 1px rgba(255, 255, 255, 0.1) inset,
                     0 0 140px rgba(16, 185, 129, 0.15)`
                  : `0 30px 60px rgba(0, 0, 0, 0.12),
                     0 0 0 1px rgba(255, 255, 255, 1) inset,
                     0 0 140px rgba(16, 185, 129, 0.08)`,
                transition: { duration: 0.4 }
              } }
            >
              <img
                src="/profile.jpeg"
                alt="Pavithra Sandamini"
                style={ imageStyle }
              />
            </motion.div>
          </motion.div>

          {/* Enhanced Text Content */ }
          <motion.div
            style={ textContainerStyle }
            initial={ { opacity: 0, x: 50 } }
            whileInView={ { opacity: 1, x: 0 } }
            transition={ {
              duration: 0.8,
              delay: 0.7,
              ease: [0.25, 0.46, 0.45, 0.94]
            } }
            viewport={ { once: true } }
          >
            {/* Role Tag & Name */ }
            <motion.div
              style={ introSectionStyle }
              initial={ { opacity: 0, y: 20 } }
              whileInView={ { opacity: 1, y: 0 } }
              transition={ { duration: 0.6, delay: 0.8 } }
              viewport={ { once: true } }
            >
              <motion.div
                style={ roleTagStyle }
                whileHover={ {
                  scale: 1.05,
                  boxShadow: "0 6px 20px rgba(16, 185, 129, 0.2)",
                } }
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M20 7L9 18L4 13"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Software Engineer
              </motion.div>

              <Title style={ nameStyle }>
                Pavithra Sandamini
              </Title>

              <Text style={ descriptionStyle }>
                Passionate full-stack developer specializing in <strong style={ { color: "#10b981" } }>React, TypeScript,
                  and modern web technologies</strong>. I create scalable, user-focused applications with expertise
                in cloud platforms like <strong>AWS and Azure</strong>, infrastructure-as-code using <strong>Terraform</strong>,
                and container orchestration with <strong>Kubernetes</strong>.
                <br /><br />
                My mission is to bridge the gap between elegant design and robust functionality,
                delivering exceptional digital experiences that perform at scale.
              </Text>
            </motion.div>

            {/* Skills Categories */ }
            <motion.div
              style={ skillsSectionStyle }
              initial={ { opacity: 0, y: 30 } }
              whileInView={ { opacity: 1, y: 0 } }
              transition={ { duration: 0.6, delay: 0.9 } }
              viewport={ { once: true } }
            >
              <motion.div style={ skillsCategoryStyle }>
                <div style={ categoryTitleStyle }>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2L2 7L12 12L22 7L12 2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 17L12 22L22 17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 12L12 17L22 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Core Technologies
                </div>
                <div style={ skillsListStyle }>
                  { ['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Azure', 'Terraform', 'Kubernetes'].map((skill, index) => (
                    <motion.span
                      key={ skill }
                      style={ skillTagStyle }
                      initial={ { opacity: 0, scale: 0.8 } }
                      whileInView={ { opacity: 1, scale: 1 } }
                      transition={ { duration: 0.3, delay: 1.0 + index * 0.1 } }
                      viewport={ { once: true } }
                      whileHover={ {
                        scale: 1.05,
                        backgroundColor: isDarkMode ? "rgba(16, 185, 129, 0.1)" : "rgba(16, 185, 129, 0.08)",
                        borderColor: "rgba(16, 185, 129, 0.3)",
                        color: "#10b981",
                        transition: { duration: 0.2 }
                      } }
                    >
                      { skill }
                    </motion.span>
                  )) }
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Achievement Statistics */ }
        <motion.div
          style={ achievementsSectionStyle }
          initial={ { opacity: 0, y: 40 } }
          whileInView={ { opacity: 1, y: 0 } }
          transition={ { duration: 0.8, delay: 1.0 } }
          viewport={ { once: true } }
        >
          {/* 3+ Years Experience */ }
          <motion.div
            style={ {
              background: isDarkMode
                ? `linear-gradient(135deg, 
                    rgba(16, 185, 129, 0.1) 0%, 
                    rgba(5, 150, 105, 0.08) 100%)`
                : `linear-gradient(135deg, 
                    rgba(16, 185, 129, 0.08) 0%, 
                    rgba(5, 150, 105, 0.06) 100%)`,
              backdropFilter: "blur(15px)",
              borderRadius: screens.lg ? "20px" : "16px",
              border: `2px solid ${isDarkMode
                ? "rgba(16, 185, 129, 0.2)"
                : "rgba(16, 185, 129, 0.15)"}`,
              padding: screens.lg ? "2rem" : "1.5rem",
              boxShadow: isDarkMode
                ? `0 12px 24px rgba(16, 185, 129, 0.1),
                   inset 0 1px 0 rgba(255, 255, 255, 0.1)`
                : `0 12px 24px rgba(16, 185, 129, 0.08),
                   inset 0 1px 0 rgba(255, 255, 255, 0.8)`,
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            } }
            initial={ { opacity: 0, y: 30, scale: 0.9 } }
            whileInView={ { opacity: 1, y: 0, scale: 1 } }
            transition={ { duration: 0.6, delay: 1.1 } }
            viewport={ { once: true } }
            whileHover={ {
              scale: 1.05,
              y: -5,
              borderColor: isDarkMode
                ? "rgba(16, 185, 129, 0.4)"
                : "rgba(16, 185, 129, 0.3)",
              boxShadow: isDarkMode
                ? `0 20px 40px rgba(16, 185, 129, 0.15),
                   inset 0 1px 0 rgba(255, 255, 255, 0.15)`
                : `0 20px 40px rgba(16, 185, 129, 0.12),
                   inset 0 1px 0 rgba(255, 255, 255, 1)`,
              transition: { duration: 0.3 }
            } }
          >
            <motion.div
              style={ {
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "150%",
                height: "150%",
                background: "linear-gradient(45deg, transparent 30%, rgba(16, 185, 129, 0.03), transparent 70%)",
                pointerEvents: "none",
              } }
              animate={ {
                rotate: [0, 360],
              } }
              transition={ {
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              } }
            />

            <div style={ {
              fontSize: screens.lg ? "2.5rem" : "2rem",
              fontWeight: "900",
              color: "#10b981",
              marginBottom: "0.75rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.75rem",
              position: "relative",
              zIndex: 2,
            } }>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path
                  d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M12.5 7C12.5 9.20914 10.7091 11 8.5 11C6.29086 11 4.5 9.20914 4.5 7C4.5 4.79086 6.29086 3 8.5 3C10.7091 3 12.5 4.79086 12.5 7ZM20 8V14M23 11H17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              3+
            </div>
            <div style={ {
              fontSize: screens.lg ? "1.2rem" : "1rem",
              fontWeight: "700",
              color: isDarkMode ? "#ffffff" : "#1f2937",
              marginBottom: "0.5rem",
              position: "relative",
              zIndex: 2,
            } }>
              Years Experience
            </div>
            <div style={ {
              fontSize: "0.9rem",
              color: isDarkMode ? "#94a3b8" : "#6b7280",
              lineHeight: "1.5",
              position: "relative",
              zIndex: 2,
            } }>
              Professional software development
            </div>
          </motion.div>

          {/* Terraform Certified */ }
          <motion.div
            style={ {
              background: isDarkMode
                ? `linear-gradient(135deg, 
                    rgba(59, 130, 246, 0.1) 0%, 
                    rgba(37, 99, 235, 0.08) 100%)`
                : `linear-gradient(135deg, 
                    rgba(59, 130, 246, 0.08) 0%, 
                    rgba(37, 99, 235, 0.06) 100%)`,
              backdropFilter: "blur(15px)",
              borderRadius: screens.lg ? "20px" : "16px",
              border: `2px solid ${isDarkMode
                ? "rgba(59, 130, 246, 0.2)"
                : "rgba(59, 130, 246, 0.15)"}`,
              padding: screens.lg ? "2rem" : "1.5rem",
              boxShadow: isDarkMode
                ? `0 12px 24px rgba(59, 130, 246, 0.1),
                   inset 0 1px 0 rgba(255, 255, 255, 0.1)`
                : `0 12px 24px rgba(59, 130, 246, 0.08),
                   inset 0 1px 0 rgba(255, 255, 255, 0.8)`,
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            } }
            initial={ { opacity: 0, y: 30, scale: 0.9 } }
            whileInView={ { opacity: 1, y: 0, scale: 1 } }
            transition={ { duration: 0.6, delay: 1.2 } }
            viewport={ { once: true } }
            whileHover={ {
              scale: 1.05,
              y: -5,
              borderColor: isDarkMode
                ? "rgba(59, 130, 246, 0.4)"
                : "rgba(59, 130, 246, 0.3)",
              transition: { duration: 0.3 }
            } }
          >
            <div style={ {
              fontSize: screens.lg ? "2.5rem" : "2rem",
              fontWeight: "900",
              color: "#3b82f6",
              marginBottom: "0.75rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.75rem"
            } }>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              ✓
            </div>
            <div style={ {
              fontSize: screens.lg ? "1.2rem" : "1rem",
              fontWeight: "700",
              color: isDarkMode ? "#ffffff" : "#1f2937",
              marginBottom: "0.5rem"
            } }>
              Terraform Certified
            </div>
            <div style={ {
              fontSize: "0.9rem",
              color: isDarkMode ? "#94a3b8" : "#6b7280",
              lineHeight: "1.5"
            } }>
              Infrastructure as Code expert
            </div>
          </motion.div>

          {/* 15+ Projects */ }
          <motion.div
            style={ {
              background: isDarkMode
                ? `linear-gradient(135deg, 
                    rgba(139, 92, 246, 0.1) 0%, 
                    rgba(124, 58, 237, 0.08) 100%)`
                : `linear-gradient(135deg, 
                    rgba(139, 92, 246, 0.08) 0%, 
                    rgba(124, 58, 237, 0.06) 100%)`,
              backdropFilter: "blur(15px)",
              borderRadius: screens.lg ? "20px" : "16px",
              border: `2px solid ${isDarkMode
                ? "rgba(139, 92, 246, 0.2)"
                : "rgba(139, 92, 246, 0.15)"}`,
              padding: screens.lg ? "2rem" : "1.5rem",
              boxShadow: isDarkMode
                ? `0 12px 24px rgba(139, 92, 246, 0.1),
                   inset 0 1px 0 rgba(255, 255, 255, 0.1)`
                : `0 12px 24px rgba(139, 92, 246, 0.08),
                   inset 0 1px 0 rgba(255, 255, 255, 0.8)`,
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            } }
            initial={ { opacity: 0, y: 30, scale: 0.9 } }
            whileInView={ { opacity: 1, y: 0, scale: 1 } }
            transition={ { duration: 0.6, delay: 1.3 } }
            viewport={ { once: true } }
            whileHover={ {
              scale: 1.05,
              y: -5,
              borderColor: isDarkMode
                ? "rgba(139, 92, 246, 0.4)"
                : "rgba(139, 92, 246, 0.3)",
              transition: { duration: 0.3 }
            } }
          >
            <div style={ {
              fontSize: screens.lg ? "2.5rem" : "2rem",
              fontWeight: "900",
              color: "#8b5cf6",
              marginBottom: "0.75rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.75rem"
            } }>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path
                  d="M7 8H17M7 12H17M7 16H12M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              15+
            </div>
            <div style={ {
              fontSize: screens.lg ? "1.2rem" : "1rem",
              fontWeight: "700",
              color: isDarkMode ? "#ffffff" : "#1f2937",
              marginBottom: "0.5rem"
            } }>
              Projects Worked
            </div>
            <div style={ {
              fontSize: "0.9rem",
              color: isDarkMode ? "#94a3b8" : "#6b7280",
              lineHeight: "1.5"
            } }>
              Enterprise & web applications
            </div>
          </motion.div>

          {/* Technical Content Writer */ }
          <motion.div
            style={ {
              background: isDarkMode
                ? `linear-gradient(135deg, 
                    rgba(236, 72, 153, 0.1) 0%, 
                    rgba(219, 39, 119, 0.08) 100%)`
                : `linear-gradient(135deg, 
                    rgba(236, 72, 153, 0.08) 0%, 
                    rgba(219, 39, 119, 0.06) 100%)`,
              backdropFilter: "blur(15px)",
              borderRadius: screens.lg ? "20px" : "16px",
              border: `2px solid ${isDarkMode
                ? "rgba(236, 72, 153, 0.2)"
                : "rgba(236, 72, 153, 0.15)"}`,
              padding: screens.lg ? "2rem" : "1.5rem",
              boxShadow: isDarkMode
                ? `0 12px 24px rgba(236, 72, 153, 0.1),
                   inset 0 1px 0 rgba(255, 255, 255, 0.1)`
                : `0 12px 24px rgba(236, 72, 153, 0.08),
                   inset 0 1px 0 rgba(255, 255, 255, 0.8)`,
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            } }
            initial={ { opacity: 0, y: 30, scale: 0.9 } }
            whileInView={ { opacity: 1, y: 0, scale: 1 } }
            transition={ { duration: 0.6, delay: 1.4 } }
            viewport={ { once: true } }
            whileHover={ {
              scale: 1.05,
              y: -5,
              borderColor: isDarkMode
                ? "rgba(236, 72, 153, 0.4)"
                : "rgba(236, 72, 153, 0.3)",
              transition: { duration: 0.3 }
            } }
          >
            <div style={ {
              fontSize: screens.lg ? "2.5rem" : "2rem",
              fontWeight: "900",
              color: "#ec4899",
              marginBottom: "0.75rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.75rem"
            } }>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path
                  d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H11M15.5 17L20 12L15.5 7M4 15L9 10L4 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              ✍️
            </div>
            <div style={ {
              fontSize: screens.lg ? "1.2rem" : "1rem",
              fontWeight: "700",
              color: isDarkMode ? "#ffffff" : "#1f2937",
              marginBottom: "0.5rem"
            } }>
              Technical Writer
            </div>
            <div style={ {
              fontSize: "0.9rem",
              color: isDarkMode ? "#94a3b8" : "#6b7280",
              lineHeight: "1.5"
            } }>
              Content creator & blogger
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default About;