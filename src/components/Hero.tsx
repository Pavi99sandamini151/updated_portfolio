import React, { useState } from "react";
import { Menu, Button, Drawer, Grid } from "antd";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { MenuOutlined } from "@ant-design/icons";

// Navigation menu items
const menuItems = [
  { key: "about", label: <a href="#about">About</a> },
  { key: "experience", label: <a href="#experience">Experience</a> },
  { key: "projects", label: <a href="#projects">Projects</a> },
  { key: "skills", label: <a href="#skills">Skills</a> },
  { key: "contact", label: <a href="#contact">Contact</a> },
  { key: "blogs", label: <a href="https://pavithrasandamini.medium.com/">Blogs</a> },
];

// Social media links
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
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  const [drawerVisible, setDrawerVisible] = useState(false);

  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        position: "relative",
        width: "100%",
        height: "70vh",
        backgroundImage: `url('/her-image.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        }}
      />

      {/* Header */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          position: "absolute",
          top: 0,
          width: "100%",
          zIndex: 10,
          padding: "1rem 2.5vw",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ color: "#fff", fontWeight: "bold", fontSize: "1.2rem", whiteSpace: "nowrap" }}>
          
        </div>

        {screens.md ? (
          <Menu
            mode="horizontal"
            items={menuItems}
            style={{
              backgroundColor: "transparent",
              border: "none",
              fontSize: "1.1rem",
              fontWeight: 500,
              color: "#fff",
              flexWrap: "wrap",
              flex: "1 1 auto",
              justifyContent: "flex-end",
              display: "flex",
            }}
          />
        ) : (
          <>
            <Button
              icon={<MenuOutlined />}
              onClick={() => setDrawerVisible(true)}
              style={{ color: "#fff", border: "none", background: "none" }}
            />
            <Drawer
              title="Menu"
              placement="right"
              onClose={() => setDrawerVisible(false)}
              open={drawerVisible}
            >
              <Menu
                mode="vertical"
                items={menuItems}
                onClick={() => setDrawerVisible(false)}
              />
            </Drawer>
          </>
        )}
      </motion.header>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "#fff",
          gap: "1.5rem",
          padding: "0 1rem",
        }}
      >
        <motion.h1
          style={{ fontSize: "2.5rem", fontWeight: "bold" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Hi, I'm Pavithra
        </motion.h1>

        <motion.p
          style={{ fontSize: "2.0rem", minHeight: "1.5em" }}
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
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <Button type="primary" style={{ fontSize: "1rem" }}>
            <a
              href="/pavithra_sandamini.pdf"
              download="pavithra_sandamini.pdf"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              Download my Resume
            </a>
          </Button>

          <div style={{ display: "flex", gap: "1.25rem" }}>
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                style={{
                  color: "#fff",
                  opacity: 0.85,
                  transition: "opacity 0.2s",
                }}
                onMouseOver={(e) => (e.currentTarget.style.opacity = "1")}
                onMouseOut={(e) => (e.currentTarget.style.opacity = "0.85")}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
