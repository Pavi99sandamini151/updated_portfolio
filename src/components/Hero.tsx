import React from "react";
import { Button, Grid } from "antd";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
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
];

const HeroSection: React.FC = () => {
  const screens = useBreakpoint();

  const containerStyle: React.CSSProperties = {
    minHeight: "50vh",
    display: "flex",
    flexDirection: "column",
  };

  const headerRowStyle: React.CSSProperties = {
    width: "100%",
    maxWidth: "90vw",
    margin: "0 auto",
  };

  const contentRowStyle: React.CSSProperties = {
    maxWidth: "90vw",
    margin: "0 auto",
    width: "100%",
    display: "grid",
    gridTemplateColumns: screens.lg ? "1fr 1fr" : "1fr",
    gap: screens.lg ? "4rem" : "2rem",
    alignItems: "center",
    flex: 1,
  };

  const textColumnStyle: React.CSSProperties = {
    color: "#ffffff",
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    order: screens.lg ? 1 : 2,
    alignItems: "left",
    marginLeft: screens.lg ? "100px": "0px"
  };

  const imageColumnStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    order: screens.lg ? 2 : 1,
  };

  const imageStyle: React.CSSProperties = {
    width: "100%",
    borderRadius: "20px",
    objectFit: "cover",
  };

  const titleStyle: React.CSSProperties = {
    fontSize: screens.lg ? "3.5rem" : "2.5rem",
    fontWeight: "bold",
    marginBottom: "1rem",
    background: "linear-gradient(135deg, #10b981, #3b82f6)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: screens.lg ? "2rem" : "1.5rem",
    minHeight: "1.5em",
    color: "#e5e7eb",
    marginBottom: "2rem",
  };

  const subContentStyle: React.CSSProperties = {
    fontSize: screens.lg ? "2rem" : "1.5rem",
    minHeight: "1.5em",
    color: "#e5e7eb",
    maxWidth: "500px",
    marginBottom: "10px",
  };

  const buttonStyle: React.CSSProperties = {
    fontSize: "1.1rem",
    height: "50px",
    borderRadius: "25px",
    background: "linear-gradient(135deg, #10b981, #059669)",
    border: "none",
    boxShadow: "0 4px 15px rgba(16, 185, 129, 0.3)",
    transition: "all 0.3s ease",
  };

  const socialContainerStyle: React.CSSProperties = {
    display: "flex",
    gap: "1.5rem",
    justifyContent: screens.lg ? "flex-start" : "center",
    marginTop: "1rem",
  };

  const socialLinkStyle: React.CSSProperties = {
    color: "#e5e7eb",
    opacity: 0.8,
    transition: "all 0.3s ease",
    padding: "10px",
    borderRadius: "50%",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={containerStyle}
    >
      <div style={headerRowStyle}>
        <div style={{ paddingTop: "25px", textAlign: "center", color: "#ffffff" }}>
          <Header />
        </div>
      </div>

      <div style={contentRowStyle}>
        <motion.div
          style={textColumnStyle}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            style={titleStyle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Hi, I'm Pavithra
          </motion.h1>
          <motion.div
            style={subContentStyle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Full-stack problem solver with a passion for clean code
          </motion.div>
          

          <motion.div
            style={subtitleStyle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Typewriter
              words={[
                "Software Engineer",
                "Graduate at UCSC",
                "Tech Enthusiastic",
                "Technical Blogger",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div
              whileHover={{ 
                scale: 1.05,
                y: -2,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }
              }}
              whileTap={{ 
                scale: 0.95,
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 25
                }
              }}
              animate={{
                y: [0, -5, 0],
                transition: {
                  duration: 3,
                  repeat: Infinity,
                  ease: [0.42, 0, 0.58, 1],
                  repeatType: "reverse"
                }
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15
              }}
            >
              <Button
                type="primary"
                size="large"
                style={{
                  ...buttonStyle,
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 12px 30px rgba(16, 185, 129, 0.5)";
                  e.currentTarget.style.background = "linear-gradient(135deg, #059669, #047857)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 15px rgba(16, 185, 129, 0.3)";
                  e.currentTarget.style.background = "linear-gradient(135deg, #10b981, #059669)";
                }}
              >
                <motion.a
                  href="/pavithra_sandamini.pdf"
                  download="pavithra_sandamini.pdf"
                  style={{ color: "#fff", textDecoration: "none", display: "block" }}
                  whileHover={{
                    scale: 1.02,
                    transition: { 
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                      duration: 0.3
                    }
                  }}
                >
                  <motion.span
                    initial={{ opacity: 1 }}
                    animate={{
                      opacity: [1, 0.85, 1],
                      transition: {
                        duration: 4,
                        repeat: Infinity,
                        ease: [0.4, 0, 0.6, 1],
                        repeatType: "reverse"
                      }
                    }}
                  >
                    Download My Resume
                  </motion.span>
                </motion.a>
              </Button>
            </motion.div>

            <div style={socialContainerStyle}>
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  style={socialLinkStyle}
                  whileHover={{ 
                    scale: 1.1,
                    backgroundColor: "rgba(16, 185, 129, 0.2)",
                    color: "#10b981"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Image Column */}
        <motion.div
          style={imageColumnStyle}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <img
            src="/her-image.png"
            alt="Pavithra Sandamini"
            style={imageStyle}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
