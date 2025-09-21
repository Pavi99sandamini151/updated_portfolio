import { Button, Grid } from "antd";
import { motion } from "framer-motion";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { useTheme } from "../contexts/ThemeContext";
import Header from "./Header";

const { useBreakpoint } = Grid;

const socialLinks = [
  {
    href: "https://github.com/Pavi99sandamini151",
    label: "GitHub",
    icon: (
      <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 
        6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 
        1.004.07 1.532 1.032 1.532 1.032.892 1.53 
        2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 
        0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.272.098-2.65 
        0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 
        1.705.115 2.504.337 1.909-1.295 
        2.748-1.025 2.748-1.025.546 1.378.202 2.396.1 
        2.65.64.7 1.028 1.595 
        1.028 2.688 0 3.847-2.338 
        4.695-4.566 4.944.359.309.678.92.678 
        1.855 0 1.338-.012 2.419-.012 
        2.749 0 .267.18.577.688.48C19.138 
        20.2 22 16.447 22 12.021 22 
        6.484 17.523 2 12 2z" />
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/in/pavithrasandamini/",
    label: "LinkedIn",
    icon: (
      <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 
        2.239-5 5v14c0 2.761 2.239 
        5 5 5h14c2.761 0 5-2.239 
        5-5v-14c0-2.761-2.239-5-5-5zm-11 
        19h-3v-10h3v10zm-1.5-11.268c-.966 
        0-1.75-.784-1.75-1.75s.784-1.75 
        1.75-1.75 1.75.784 1.75 
        1.75-.784 1.75-1.75 
        1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 
        0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 
        1.379-1.563 2.841-1.563 3.039 0 
        3.6 2.001 3.6 4.599v5.597z" />
      </svg>
    ),
  },
  {
    href: "mailto:gpavithrasandamini@gmail.com",
    label: "Email",
    icon: (
      <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 13.065l-11.99-7.065v14h24v-14l-12.01 
        7.065zm11.99-9.065h-23.98l11.99 
        7.065 11.99-7.065z" />
      </svg>
    ),
  },
  {
    href: "https://www.credly.com/earner/dashboard",
    label: "Credly",
    icon: (
      <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2L3.09 8.26l2 1.13L12 4.7l6.91 4.69 2-1.13L12 2z" />
        <path d="M12 6.4L5.09 10.39v7.52c0 3.5 2.89 4.09 6.91 4.09s6.91-.59 6.91-4.09v-7.52L12 6.4zm5.91 7.51c0 2.41-2.11 3.09-5.91 3.09s-5.91-.68-5.91-3.09v-6.52L12 8.7l5.91-1.31v6.52z" />
        <circle cx="12" cy="13" r="2.5" />
      </svg>
    ),
  },
];

const HeroSection: React.FC = () => {
  const screens = useBreakpoint();
  const { isDarkMode } = useTheme();
  const [socialPanelExpanded, setSocialPanelExpanded] = React.useState(false);

  const containerStyle: React.CSSProperties = {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    padding: screens.lg ? "2rem" : "1rem",
    paddingTop: screens.lg ? "6rem" : "5rem", // Account for fixed header
    maxWidth: "1400px",
    margin: "0 auto",
    position: "relative",
  };

  const headerRowStyle: React.CSSProperties = {
    position: "absolute",
    top: "1rem",
    left: screens.lg ? "2rem" : "1rem",
    right: screens.lg ? "2rem" : "1rem",
    width: `calc(100% - ${screens.lg ? "4rem" : "2rem"})`,
    zIndex: 10,
  };

  const contentRowStyle: React.CSSProperties = {
    width: "100%",
    display: "grid",
    gridTemplateColumns: screens.lg ? "1.2fr 1fr" : "1fr", // Better proportions
    gap: screens.lg ? "5rem" : "3rem",
    alignItems: "center",
    flex: 1,
    minHeight: "calc(100vh - 8rem)", // Ensure proper height
    paddingTop: screens.lg ? "2rem" : "1rem",
  };

  const textColumnStyle: React.CSSProperties = {
    color: isDarkMode ? "#ffffff" : "#1f2937",
    display: "flex",
    flexDirection: "column",
    gap: screens.lg ? "1.25rem" : "1rem", // Tighter, more professional spacing
    order: screens.lg ? 2 : 2,
    alignItems: "flex-start",
    padding: screens.lg ? "3rem 0" : "2rem 0",
    maxWidth: "100%",
    position: "relative",
  };

  const imageColumnStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    order: screens.lg ? 1 : 1,
    position: "relative",
    padding: screens.lg ? "2rem" : "1rem",
  };

  const imageStyle: React.CSSProperties = {
    width: "100%",
    borderRadius: "20px",
    objectFit: "cover",
  };

  const titleStyle: React.CSSProperties = {
    fontSize: screens.lg ? "clamp(3rem, 5vw, 4.5rem)" : "clamp(2rem, 8vw, 2.8rem)", // Responsive typography
    fontWeight: "800",
    marginBottom: screens.lg ? "0.5rem" : "0.4rem", // Reduced bottom margin
    background: "linear-gradient(135deg, #10b981 0%, #3b82f6 50%, #8b5cf6 100%)", // Enhanced gradient
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    lineHeight: "1.1",
    letterSpacing: "-0.02em", // Tighter letter spacing for modern look
    position: "relative",
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: screens.lg ? "1.8rem" : "1.4rem", // More balanced size
    minHeight: screens.lg ? "2.5em" : "2.2em", // Reduced height for tighter spacing
    color: isDarkMode ? "#10b981" : "#059669", // Brand color for emphasis
    marginBottom: screens.lg ? "0.8rem" : "0.6rem", // Much reduced bottom margin
    lineHeight: "1.3", // Tighter line height
    fontWeight: "600", // Semi-bold for better hierarchy
    letterSpacing: "-0.01em",
  };

  const subContentStyle: React.CSSProperties = {
    fontSize: screens.lg ? "1.25rem" : "1.1rem",
    color: isDarkMode ? "#e2e8f0" : "#64748b", // Better contrast
    maxWidth: screens.lg ? "90%" : "100%",
    marginBottom: screens.lg ? "0.5rem" : "0.4rem", // Reduced bottom margin
    lineHeight: "1.6", // Better readability
    fontWeight: "400",
    opacity: 0.9,
  };

  const buttonStyle: React.CSSProperties = {
    fontSize: "1rem",
    height: screens.lg ? "60px" : "56px",
    minWidth: screens.lg ? "220px" : "200px",
    borderRadius: "30px", // More modern rounded button
    background: "linear-gradient(135deg, #10b981 0%, #059669 50%, #047857 100%)",
    border: `2px solid rgba(16, 185, 129, 0.4)`,
    boxShadow: "0 10px 30px rgba(16, 185, 129, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1) inset",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    fontWeight: 600,
    letterSpacing: "0.5px",
    position: "relative",
    overflow: "hidden",
  };

  const ctaContainerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: screens.lg ? "1.2rem" : "1rem", // Controlled spacing between button and social links
    alignItems: screens.lg ? "flex-start" : "center",
  };



  // Expert-Level Social Media Panel Styles with Advanced Interactions
  const modernSocialPanelStyle: React.CSSProperties = {
    position: "fixed",
    right: "0",
    top: "50%",
    transform: "translateY(-50%) translateX(calc(100% - 24px))",
    zIndex: 1000,
    display: screens.sm ? "block" : "none",
    transition: "all 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
    filter: socialPanelExpanded
      ? "drop-shadow(-4px 0 16px rgba(16, 185, 129, 0.1))"
      : "drop-shadow(-2px 0 8px rgba(0, 0, 0, 0.1))",
  };

  const socialContainerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: screens.lg ? "4px" : screens.md ? "3px" : "2px",
    padding: screens.lg ? "12px 8px" : screens.md ? "12px 8px" : "10px 10px",
    minHeight: screens.lg ? "220px" : screens.md ? "220px" : "140px",
    background: isDarkMode
      ? `linear-gradient(135deg, 
          rgba(15, 23, 42, 0.98) 0%, 
          rgba(30, 41, 59, 0.95) 30%,
          rgba(15, 23, 42, 0.98) 70%,
          rgba(30, 41, 59, 0.95) 100%)`
      : `linear-gradient(135deg, 
          rgba(255, 255, 255, 0.98) 0%, 
          rgba(248, 250, 252, 0.95) 30%,
          rgba(255, 255, 255, 0.98) 70%,
          rgba(248, 250, 252, 0.95) 100%)`,
    backdropFilter: `blur(${screens.lg ? "50px" : "40px"}) saturate(${screens.lg ? "200%" : "180%"})`,
    borderRadius: screens.lg ? "36px 0 0 36px" : screens.md ? "32px 0 0 32px" : "28px 0 0 28px",
    border: `${screens.lg ? "2px" : "1px"} solid ${isDarkMode
      ? "rgba(148, 163, 184, 0.12)"
      : "rgba(148, 163, 184, 0.25)"}`,
    borderRight: "none",
    boxShadow: isDarkMode
      ? `
        -${screens.lg ? "12px" : "8px"} 0 ${screens.lg ? "40px" : "32px"} rgba(0, 0, 0, 0.4),
        inset 2px 2px 0 rgba(148, 163, 184, 0.1),
        inset 0 -2px 0 rgba(148, 163, 184, 0.08),
        0 0 0 1px rgba(16, 185, 129, 0.08),
        -4px 0 20px rgba(16, 185, 129, 0.05)
      `
      : `
        -${screens.lg ? "12px" : "8px"} 0 ${screens.lg ? "40px" : "32px"} rgba(0, 0, 0, 0.12),
        inset 2px 2px 0 rgba(255, 255, 255, 0.9),
        inset 0 -2px 0 rgba(148, 163, 184, 0.15),
        0 0 0 1px rgba(16, 185, 129, 0.12),
        -4px 0 20px rgba(16, 185, 129, 0.08)
      `,
    position: "relative",
    overflow: "hidden",
    transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
  };

  const socialToggleStyle: React.CSSProperties = {
    position: "absolute",
    left: screens.lg ? "-24px" : screens.md ? "-20px" : "-18px",
    top: "50%",
    transform: "translateY(-50%)",
    width: screens.lg ? "24px" : screens.md ? "20px" : "18px",
    height: screens.lg ? "80px" : screens.md ? "64px" : "56px",
    background: isDarkMode
      ? `linear-gradient(135deg, 
          rgba(16, 185, 129, 0.95) 0%, 
          rgba(5, 150, 105, 0.95) 50%,
          rgba(4, 120, 87, 0.95) 100%)`
      : `linear-gradient(135deg, 
          rgba(16, 185, 129, 0.95) 0%, 
          rgba(5, 150, 105, 0.95) 50%,
          rgba(4, 120, 87, 0.95) 100%)`,
    borderRadius: screens.lg ? "12px 0 0 12px" : screens.md ? "10px 0 0 10px" : "8px 0 0 8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    border: `${screens.lg ? "2px" : "1px"} solid rgba(16, 185, 129, 0.4)`,
    borderRight: "none",
    boxShadow: `
      -${screens.lg ? "6px" : "4px"} 0 ${screens.lg ? "16px" : "12px"} rgba(16, 185, 129, 0.3),
      inset 1px 1px 0 rgba(255, 255, 255, 0.3),
      inset 0 -1px 0 rgba(0, 0, 0, 0.1)
    `,
    transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
  };

  const expertSocialLinkStyle: React.CSSProperties = {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: screens.lg ? "64px" : screens.md ? "56px" : "48px",
    height: screens.lg ? "64px" : screens.md ? "56px" : "48px",
    borderRadius: screens.lg ? "20px" : screens.md ? "18px" : "16px",
    background: "transparent",
    border: "2px solid transparent",
    transition: "all 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
    cursor: "pointer",
    overflow: "hidden",
    color: isDarkMode ? "#94a3b8" : "#64748b",
    fontSize: screens.lg ? "1.2rem" : screens.md ? "1.1rem" : "1rem",
  };

  return (
    <motion.section
      id="hero"
      initial={ { opacity: 0, y: 20 } }
      animate={ { opacity: 1, y: 0 } }
      transition={ {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.2
      } }
      style={ {
        ...containerStyle,
        overflow: "hidden",
      } }
    >
      {/* Subtle Background Elements */ }
      <motion.div
        style={ {
          position: "absolute",
          top: "10%",
          right: "10%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, rgba(16, 185, 129, 0.05), rgba(59, 130, 246, 0.05))",
          filter: "blur(60px)",
          zIndex: -1,
        } }
        animate={ {
          y: [0, -20, 0],
          x: [0, 10, 0],
        } }
        transition={ {
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        } }
      />

      <motion.div
        style={ {
          position: "absolute",
          bottom: "20%",
          left: "5%",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, rgba(139, 92, 246, 0.05), rgba(16, 185, 129, 0.05))",
          filter: "blur(40px)",
          zIndex: -1,
        } }
        animate={ {
          y: [0, 15, 0],
          x: [0, -5, 0],
        } }
        transition={ {
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        } }
      />
      <div style={ headerRowStyle }>
        <Header />
      </div>

      <div style={ contentRowStyle }>
        <motion.div
          style={ textColumnStyle }
          initial={ { opacity: 0, x: -50, scale: 0.9 } }
          animate={ {
            opacity: 1,
            x: 0,
            scale: 1,
            y: [0, -10, 0]
          } }
          transition={ {
            opacity: { duration: 0.8, delay: 0.3 },
            x: { duration: 0.8, delay: 0.3 },
            scale: { duration: 0.8, delay: 0.3 },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            ease: [0.25, 0.46, 0.45, 0.94]
          } }
          whileHover={ {
            scale: 1.02,
            y: -5,
            transition: { duration: 0.3 }
          } }
        >
          <motion.h1
            style={ titleStyle }
            initial={ { opacity: 0, y: 30 } }
            animate={ { opacity: 1, y: 0 } }
            transition={ { duration: 0.8, delay: 0.4 } }
          >
            Hi, I'm Pavithra
          </motion.h1>
          <motion.div
            style={ subContentStyle }
            initial={ { opacity: 0, y: 30 } }
            animate={ { opacity: 1, y: 0 } }
            transition={ { duration: 0.8, delay: 0.4 } }
          >
            Passionate Software Engineer specializing in React, TypeScript, and cloud technologies.
            Building scalable applications with modern tech stacks and DevOps practices.
            Experience with AWS, Azure, Terraform, and full-stack development across enterprise projects.
          </motion.div>


          <motion.div
            style={ subtitleStyle }
            initial={ { opacity: 0, y: 30 } }
            animate={ { opacity: 1, y: 0 } }
            transition={ { duration: 0.8, delay: 0.6 } }
          >
            <Typewriter
              words={ [
                "Software Engineer at Q4US Technologies",
                "Full-Stack Developer",
                "Cloud & DevOps Enthusiast",
                "React & TypeScript Expert",
                "Terraform Certified Professional",
                "UCSC Computer Science Graduate",
                "Technical Blogger",
              ] }
              loop={ true }
              cursor
              cursorStyle="|"
              typeSpeed={ 70 }
              deleteSpeed={ 50 }
              delaySpeed={ 2000 }
            />
          </motion.div>

          <motion.div
            initial={ { opacity: 0, y: 30 } }
            animate={ { opacity: 1, y: 0 } }
            transition={ { duration: 0.8, delay: 0.8 } }
            style={ ctaContainerStyle }
          >
            <motion.div
              whileHover={ {
                scale: 1.05,
                y: -2,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }
              } }
              whileTap={ {
                scale: 0.95,
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 25
                }
              } }
              animate={ {
                y: [0, -5, 0],
                transition: {
                  duration: 3,
                  repeat: Infinity,
                  ease: [0.42, 0, 0.58, 1],
                  repeatType: "reverse"
                }
              } }
              transition={ {
                type: "spring",
                stiffness: 200,
                damping: 15
              } }
            >
              <Button
                type="primary"
                size="large"
                style={ {
                  ...buttonStyle,
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                } }
                onMouseEnter={ (e) => {
                  e.currentTarget.style.transform = "translateY(-4px) scale(1.02)";
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(16, 185, 129, 0.4)";
                  e.currentTarget.style.background = "linear-gradient(135deg, #059669, #047857)";
                  e.currentTarget.style.borderColor = "rgba(16, 185, 129, 0.6)";
                } }
                onMouseLeave={ (e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "0 8px 25px rgba(16, 185, 129, 0.3)";
                  e.currentTarget.style.background = "linear-gradient(135deg, #10b981, #059669)";
                  e.currentTarget.style.borderColor = "rgba(16, 185, 129, 0.3)";
                } }
              >
                <motion.a
                  href="/pavithra_sandamini.pdf"
                  download="pavithra_sandamini.pdf"
                  style={ { color: "#fff", textDecoration: "none", display: "block" } }
                  whileHover={ {
                    scale: 1.02,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                      duration: 0.3
                    }
                  } }
                >
                  <motion.span
                    initial={ { opacity: 1 } }
                    animate={ {
                      opacity: [1, 0.85, 1],
                      transition: {
                        duration: 4,
                        repeat: Infinity,
                        ease: [0.4, 0, 0.6, 1],
                        repeatType: "reverse"
                      }
                    } }
                  >
                    Download My Resume
                  </motion.span>
                </motion.a>
              </Button>
            </motion.div>


          </motion.div>
        </motion.div>

        {/* Image Column */ }
        <motion.div
          style={ imageColumnStyle }
          initial={ { opacity: 0, x: 50, scale: 0.9 } }
          animate={ { opacity: 1, x: 0, scale: 1 } }
          transition={ {
            duration: 0.8,
            delay: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94]
          } }
          whileHover={ {
            scale: 1.02,
            transition: { duration: 0.3 }
          } }
        >
          {/* Background Gradient Circle */ }
          <motion.div
            style={ {
              position: "absolute",
              width: screens.lg ? "500px" : "350px",
              height: screens.lg ? "500px" : "350px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(59, 130, 246, 0.1))",
              filter: "blur(40px)",
              zIndex: -1,
            } }
            animate={ {
              scale: [1, 1.1, 1],
              rotate: [0, 180, 360],
            } }
            transition={ {
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            } }
          />

          <motion.div
            style={ {
              borderRadius: "32px",
              overflow: "hidden",
              background: `linear-gradient(145deg, 
                rgba(16, 185, 129, 0.15), 
                rgba(59, 130, 246, 0.15), 
                rgba(139, 92, 246, 0.15))`,
              padding: "4px",
              boxShadow: `
                0 20px 40px rgba(16, 185, 129, 0.2),
                0 0 0 1px rgba(255, 255, 255, 0.1) inset,
                0 0 100px rgba(16, 185, 129, 0.1)
              `,
              position: "relative",
            } }
            whileHover={ {
              scale: 1.05,
              boxShadow: `
                0 25px 50px rgba(16, 185, 129, 0.3),
                0 0 0 1px rgba(255, 255, 255, 0.2) inset,
                0 0 120px rgba(16, 185, 129, 0.2)
              `,
              transition: { duration: 0.3 }
            } }
          >
            <img
              src="/her-image.png"
              alt="Pavithra Sandamini"
              style={ {
                ...imageStyle,
                borderRadius: "28px",
                transition: "all 0.3s ease",
                filter: "brightness(1.05) contrast(1.05)",
              } }
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Expert-Level Modern Social Media Panel */ }
      <motion.div
        style={ {
          ...modernSocialPanelStyle,
          transform: socialPanelExpanded
            ? "translateY(-50%) translateX(0)"
            : "translateY(-50%) translateX(calc(100% - 24px))"
        } }
        initial={ { opacity: 0, x: 100 } }
        animate={ { opacity: 1, x: 0 } }
        transition={ { duration: 1, delay: 1.5, ease: [0.23, 1, 0.32, 1] } }
        onMouseEnter={ () => setSocialPanelExpanded(true) }
        onMouseLeave={ () => setSocialPanelExpanded(false) }
      >
        <motion.div style={ socialContainerStyle }>
          {/* Modern Toggle Indicator */ }
          <motion.div
            style={ socialToggleStyle }
            whileHover={ {
              scale: 1.1,
              boxShadow: "-6px 0 20px rgba(16, 185, 129, 0.4)"
            } }
          >
            <motion.div
              animate={ {
                rotate: socialPanelExpanded ? 180 : 0,
                scale: socialPanelExpanded ? 1.2 : 1
              } }
              transition={ { duration: 0.3, ease: "easeOut" } }
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 18L9 12L15 6"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
          </motion.div>

          {/* Social Media Links with Expert Interactions */ }
          { socialLinks.map((link, index) => (
            <motion.a
              key={ link.label }
              href={ link.href }
              target="_blank"
              rel="noopener noreferrer"
              aria-label={ link.label }
              style={ expertSocialLinkStyle }
              initial={ { opacity: 0, x: 30, scale: 0.5 } }
              animate={ {
                opacity: 1,
                x: 0,
                scale: 1,
                transition: {
                  delay: 1.8 + (index * 0.1),
                  duration: 0.6,
                  ease: [0.23, 1, 0.32, 1]
                }
              } }
              whileHover={ {
                scale: 1.15,
                rotate: [0, -3, 3, 0],
                transition: {
                  duration: 0.4,
                  ease: "easeOut"
                }
              } }
              whileTap={ {
                scale: 0.9,
                transition: { duration: 0.1 }
              } }
              onMouseEnter={ (e) => {
                const element = e.currentTarget;
                element.style.background = isDarkMode
                  ? `linear-gradient(135deg, 
                      rgba(16, 185, 129, 0.2) 0%, 
                      rgba(5, 150, 105, 0.2) 100%)`
                  : `linear-gradient(135deg, 
                      rgba(16, 185, 129, 0.15) 0%, 
                      rgba(5, 150, 105, 0.15) 100%)`;
                element.style.borderColor = "rgba(16, 185, 129, 0.4)";
                element.style.color = "#10b981";
                element.style.boxShadow = `
                  0 8px 32px rgba(16, 185, 129, 0.25),
                  inset 0 1px 0 rgba(255, 255, 255, 0.2),
                  0 0 0 1px rgba(16, 185, 129, 0.3)
                `;
                element.style.transform = "scale(1.15) translateY(-2px)";
              } }
              onMouseLeave={ (e) => {
                const element = e.currentTarget;
                element.style.background = "transparent";
                element.style.borderColor = "transparent";
                element.style.color = isDarkMode ? "#94a3b8" : "#64748b";
                element.style.boxShadow = "none";
                element.style.transform = "scale(1) translateY(0)";
              } }
            >
              {/* Dynamic Background Gradient */ }
              <motion.div
                style={ {
                  position: "absolute",
                  inset: "-2px",
                  borderRadius: "20px",
                  background: `conic-gradient(from 0deg, 
                    rgba(16, 185, 129, 0.4), 
                    rgba(59, 130, 246, 0.4), 
                    rgba(139, 92, 246, 0.4),
                    rgba(16, 185, 129, 0.4))`,
                  opacity: 0,
                  zIndex: -1,
                } }
                whileHover={ {
                  opacity: 1,
                  rotate: 360,
                  transition: { duration: 2, ease: "linear", repeat: Infinity }
                } }
              />

              {/* Icon Container */ }
              <motion.div
                style={ {
                  position: "relative",
                  zIndex: 1,
                  filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))"
                } }
                whileHover={ {
                  filter: "drop-shadow(0 4px 8px rgba(16, 185, 129, 0.3))"
                } }
              >
                { link.icon }
              </motion.div>

              {/* Tooltip */ }
              <motion.div
                style={ {
                  position: "absolute",
                  left: "-80px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: isDarkMode
                    ? "rgba(15, 23, 42, 0.95)"
                    : "rgba(255, 255, 255, 0.95)",
                  color: isDarkMode ? "#e2e8f0" : "#374151",
                  padding: "8px 12px",
                  borderRadius: "8px",
                  fontSize: "12px",
                  fontWeight: "600",
                  whiteSpace: "nowrap",
                  backdropFilter: "blur(10px)",
                  border: `1px solid ${isDarkMode ? "rgba(148, 163, 184, 0.2)" : "rgba(148, 163, 184, 0.3)"}`,
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                  opacity: 0,
                  pointerEvents: "none",
                  zIndex: 1000,
                } }
                whileHover={ {
                  opacity: socialPanelExpanded ? 1 : 0,
                  x: socialPanelExpanded ? 0 : 10,
                  transition: { delay: 0.3 }
                } }
              >
                { link.label }
              </motion.div>
            </motion.a>
          )) }

          {/* Decorative Elements */ }
          <motion.div
            style={ {
              position: "absolute",
              left: "50%",
              top: "20px",
              bottom: "20px",
              width: "1px",
              background: `linear-gradient(to bottom, 
                transparent 0%, 
                ${isDarkMode ? "rgba(16, 185, 129, 0.3)" : "rgba(16, 185, 129, 0.2)"} 50%, 
                transparent 100%)`,
              transform: "translateX(-50%)",
              zIndex: 0,
            } }
            initial={ { scaleY: 0, opacity: 0 } }
            animate={ { scaleY: 1, opacity: 1 } }
            transition={ { duration: 0.8, delay: 2.2 } }
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;