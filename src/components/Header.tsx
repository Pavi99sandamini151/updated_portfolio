import React from "react";
import { Menu } from "antd";
import { motion } from "framer-motion";

const Header: React.FC = () => {
  const items = [
    { key: "hero", label: <a href="#hero">Home</a> },
    { key: "about", label: <a href="#about">About</a> },
    { key: "experience", label: <a href="#experience">Experience</a> },
    { key: "projects", label: <a href="#projects">Projects</a> },
    { key: "skills", label: <a href="#skills">Skills</a> },
    { key: "contact", label: <a href="#contact">Contact</a> },
    { key: "blogs", label: <a href="https://pavithrasandamini.medium.com/">Blogs</a> },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{
        scale: 1.01,
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
      }}
      style={{
        backgroundColor: "0 2px 4px #10b981", // corrected background
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        position: "sticky",
        top: 0,
        zIndex: 100,
        height: "12vh",
        display: "flex",
        alignItems: "center",
        width: "100%",
        transformOrigin: "top center",
        margin: 0,
        padding: 0,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          width: "100%",
          height: "90%",
          backgroundColor: "#043c29ff",
          borderRadius: "20px"
        }}
      >
        <Menu
          mode="horizontal"
          items={items}
          style={{
            border: "none",
            display: "flex",
            justifyContent: "flex-end",
            flexWrap: "wrap",
            width: "100%",
            fontSize: "1.1rem",
            fontWeight: 500,
            backgroundColor: "transparent",
            gap: "1.5rem",
            padding: 0,
            margin: 0,
          }}
        />
      </div>
    </motion.header>
  );
};

export default Header;
