import { Grid } from "antd";
import { motion } from "framer-motion";
import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import { projects } from "../data/project";

const { useBreakpoint } = Grid;

const Projects: React.FC = () => {
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
    marginBottom: screens.lg ? "4rem" : screens.md ? "3rem" : "2.5rem",
    textAlign: "center",
  };

  const titleStyle: React.CSSProperties = {
    fontSize: screens.lg ? "4rem" : screens.md ? "3.5rem" : "2.8rem",
    fontWeight: "700",
    background: isDarkMode
      ? "linear-gradient(135deg, #ffffff 0%, #e2e8f0 50%, #cbd5e1 100%)"
      : "linear-gradient(135deg, #1e293b 0%, #475569 50%, #64748b 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    marginBottom: "1rem",
    letterSpacing: "-0.02em",
    lineHeight: "1.1",
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: screens.lg ? "1.25rem" : "1.1rem",
    color: isDarkMode ? "#94a3b8" : "#64748b",
    fontWeight: "400",
    maxWidth: "600px",
    margin: "0 auto",
    lineHeight: "1.6",
    opacity: 0.8,
  };

  // Projects Grid Container
  const projectsGridStyle: React.CSSProperties = {
    position: "relative",
    zIndex: 10,
    display: "grid",
    gridTemplateColumns: screens.lg
      ? "repeat(auto-fit, minmax(400px, 1fr))"
      : screens.md
        ? "repeat(auto-fit, minmax(350px, 1fr))"
        : "1fr",
    gap: screens.lg ? "2rem" : "1.5rem",
    width: "100%",
  };

  // Individual Project Card Style
  const projectCardStyle: React.CSSProperties = {
    position: "relative",
    background: isDarkMode
      ? `linear-gradient(135deg, 
          rgba(30, 30, 35, 0.9) 0%, 
          rgba(24, 24, 27, 0.8) 100%)`
      : `linear-gradient(135deg, 
          rgba(255, 255, 255, 0.95) 0%, 
          rgba(248, 250, 252, 0.9) 100%)`,
    backdropFilter: "blur(16px) saturate(180%)",
    borderRadius: "24px",
    border: `1px solid ${isDarkMode
      ? "rgba(255, 255, 255, 0.12)"
      : "rgba(0, 0, 0, 0.08)"}`,
    padding: screens.lg ? "2.5rem" : screens.md ? "2rem" : "1.5rem",
    boxShadow: isDarkMode
      ? `
        0 20px 40px rgba(0, 0, 0, 0.4),
        inset 0 1px 0 rgba(255, 255, 255, 0.1)`
      : `
        0 20px 40px rgba(0, 0, 0, 0.08),
        inset 0 1px 0 rgba(255, 255, 255, 0.8)`,
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    cursor: "pointer",
    overflow: "hidden",
  };

  // Project Title Style
  const projectTitleStyle: React.CSSProperties = {
    fontSize: screens.lg ? "1.5rem" : "1.3rem",
    fontWeight: "700",
    color: isDarkMode ? "#ffffff" : "#1e293b",
    marginBottom: "1rem",
    lineHeight: "1.3",
    letterSpacing: "-0.01em",
  };

  // Project Description Style
  const projectDescriptionStyle: React.CSSProperties = {
    fontSize: screens.lg ? "1rem" : "0.95rem",
    lineHeight: "1.7",
    color: isDarkMode ? "#cbd5e1" : "#475569",
    marginBottom: "1.5rem",
    opacity: 0.9,
  };

  // Tech Stack Container
  const techStackStyle: React.CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.5rem",
    marginBottom: "1.5rem",
  };

  // Tech Tag Style
  const techTagStyle: React.CSSProperties = {
    background: isDarkMode
      ? "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)"
      : "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)",
    color: isDarkMode ? "#ffffff" : "#1e40af",
    padding: "0.5rem 1rem",
    borderRadius: "12px",
    fontSize: "0.875rem",
    fontWeight: "500",
    border: `1px solid ${isDarkMode
      ? "rgba(59, 130, 246, 0.3)"
      : "rgba(59, 130, 246, 0.2)"}`,
    boxShadow: isDarkMode
      ? "0 4px 12px rgba(59, 130, 246, 0.2)"
      : "0 4px 12px rgba(59, 130, 246, 0.1)",
  };

  // View Project Button Style
  const viewButtonStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    background: isDarkMode
      ? "linear-gradient(135deg, #10b981 0%, #059669 100%)"
      : "linear-gradient(135deg, #34d399 0%, #10b981 100%)",
    color: "#ffffff",
    padding: "0.75rem 1.5rem",
    borderRadius: "16px",
    fontSize: "0.95rem",
    fontWeight: "600",
    textDecoration: "none",
    border: "none",
    cursor: "pointer",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    boxShadow: isDarkMode
      ? "0 8px 24px rgba(16, 185, 129, 0.3)"
      : "0 8px 24px rgba(16, 185, 129, 0.2)",
  };

  return (
    <motion.section
      id="projects"
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
        <h2 style={ titleStyle }>Featured Projects</h2>
        <p style={ subtitleStyle }>
          Innovative solutions crafted with cutting-edge technologies and modern development practices
        </p>
      </motion.div>

      {/* Projects Grid */ }
      <div style={ projectsGridStyle }>
        { projects.map((project, index) => (
          <motion.div
            key={ index }
            initial={ { opacity: 0, y: 40, scale: 0.95 } }
            whileInView={ { opacity: 1, y: 0, scale: 1 } }
            transition={ {
              duration: 0.6,
              delay: index * 0.15,
              ease: "easeOut",
            } }
            viewport={ { once: true, margin: "-5%" } }
            whileHover={ {
              scale: 1.02,
              y: -8,
              transition: { duration: 0.3 }
            } }
            style={ projectCardStyle }
            onMouseEnter={ (e) => {
              const target = e.currentTarget as HTMLElement;
              target.style.boxShadow = isDarkMode
                ? `
                  0 32px 64px rgba(0, 0, 0, 0.5),
                  0 0 40px rgba(16, 185, 129, 0.15),
                  inset 0 1px 0 rgba(255, 255, 255, 0.15)`
                : `
                  0 32px 64px rgba(0, 0, 0, 0.12),
                  0 0 40px rgba(16, 185, 129, 0.1),
                  inset 0 1px 0 rgba(255, 255, 255, 0.9)`;
            } }
            onMouseLeave={ (e) => {
              const target = e.currentTarget as HTMLElement;
              target.style.boxShadow = isDarkMode
                ? `
                  0 20px 40px rgba(0, 0, 0, 0.4),
                  inset 0 1px 0 rgba(255, 255, 255, 0.1)`
                : `
                  0 20px 40px rgba(0, 0, 0, 0.08),
                  inset 0 1px 0 rgba(255, 255, 255, 0.8)`;
            } }
          >
            {/* Project Title */ }
            <h3 style={ projectTitleStyle }>{ project.title }</h3>

            {/* Project Description */ }
            <p style={ projectDescriptionStyle }>{ project.description }</p>

            {/* Tech Stack */ }
            <div style={ techStackStyle }>
              { project.tech.map((tech, idx) => (
                <motion.span
                  key={ idx }
                  initial={ { opacity: 0, scale: 0.8 } }
                  whileInView={ { opacity: 1, scale: 1 } }
                  transition={ { duration: 0.4, delay: 0.1 * idx } }
                  viewport={ { once: true } }
                  style={ techTagStyle }
                >
                  { tech }
                </motion.span>
              )) }
            </div>

            {/* View Project Button */ }
            <motion.a
              href={ project.link }
              target="_blank"
              rel="noopener noreferrer"
              style={ viewButtonStyle }
              whileHover={ { scale: 1.05 } }
              whileTap={ { scale: 0.98 } }
              onMouseEnter={ (e) => {
                const target = e.currentTarget as HTMLElement;
                target.style.transform = "translateY(-2px)";
                target.style.boxShadow = isDarkMode
                  ? "0 12px 32px rgba(16, 185, 129, 0.4)"
                  : "0 12px 32px rgba(16, 185, 129, 0.3)";
              } }
              onMouseLeave={ (e) => {
                const target = e.currentTarget as HTMLElement;
                target.style.transform = "translateY(0)";
                target.style.boxShadow = isDarkMode
                  ? "0 8px 24px rgba(16, 185, 129, 0.3)"
                  : "0 8px 24px rgba(16, 185, 129, 0.2)";
              } }
            >
              <span>View Project</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </motion.a>
          </motion.div>
        )) }
      </div>
    </motion.section>
  );
};

export default Projects;
