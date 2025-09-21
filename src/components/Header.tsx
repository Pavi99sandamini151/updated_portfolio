import { CloseOutlined, MenuOutlined, MoonOutlined, SunOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useTheme } from "../contexts/ThemeContext";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { isDarkMode, toggleDarkMode } = useTheme();

  const menuItems = [
    { key: "hero", label: "Home", href: "#hero" },
    { key: "about", label: "About", href: "#about" },
    { key: "experience", label: "Experience", href: "#experience" },
    { key: "projects", label: "Projects", href: "#projects" },
    { key: "skills", label: "Skills", href: "#skills" },
    { key: "contact", label: "Contact", href: "#contact" },
    { key: "blogs", label: "Blogs", href: "https://pavithrasandamini.medium.com/", external: true },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle resize for mobile detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // Changed to 1024 for better tablet support
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMenuClick = (href: string, external?: boolean) => {
    if (external) {
      window.open(href, "_blank");
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };



  const headerVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 }
  };

  const menuItemVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    hover: { scale: 1.05, color: "#10b981" }
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, height: 0, scale: 0.95 },
    open: { opacity: 1, height: "auto", scale: 1 }
  };

  const logoVariants = {
    initial: { scale: 0, rotate: -180 },
    animate: { scale: 1, rotate: 0 },
    hover: { scale: 1.1, rotate: 5 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <motion.header
      variants={ headerVariants }
      initial="initial"
      animate="animate"
      transition={ {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      } }
      style={ {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: isMobile ? "1rem" : "1rem 2rem",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      } }
    >
      <motion.div
        animate={ {
          backgroundColor: isScrolled
            ? (isDarkMode ? "rgba(24, 24, 27, 0.9)" : "rgba(248, 250, 252, 0.9)")
            : (isDarkMode ? "rgba(24, 24, 27, 0.7)" : "rgba(248, 250, 252, 0.7)"),
          backdropFilter: isScrolled ? "blur(20px)" : "blur(12px)",
          borderColor: isScrolled
            ? (isDarkMode ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.15)")
            : (isDarkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"),
          boxShadow: isScrolled
            ? (isDarkMode ? "0 8px 32px rgba(0, 0, 0, 0.4)" : "0 8px 32px rgba(0, 0, 0, 0.1)")
            : (isDarkMode ? "0 4px 20px rgba(0, 0, 0, 0.2)" : "0 4px 20px rgba(0, 0, 0, 0.05)"),
        } }
        transition={ { duration: 0.3, ease: "easeInOut" } }
        style={ {
          background: isDarkMode ? "rgba(24, 24, 27, 0.7)" : "rgba(248, 250, 252, 0.7)",
          backdropFilter: "blur(12px)",
          border: `1px solid ${isDarkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"}`,
          borderRadius: "24px",
          padding: isMobile ? "0.5rem 1rem" : "0.75rem 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          boxShadow: isDarkMode ? "0 4px 20px rgba(0, 0, 0, 0.2)" : "0 4px 20px rgba(0, 0, 0, 0.05)",
        } }
      >
        {/* Logo/Brand */ }
        <motion.div
          variants={ logoVariants }
          initial="initial"
          animate="animate"
          whileHover="hover"
          whileTap={ { scale: 0.9 } }
          transition={ {
            duration: 0.6,
            ease: "easeOut",
            delay: 0.3
          } }
          style={ {
            fontSize: "1.5rem",
            fontWeight: "bold",
            background: "linear-gradient(135deg, #10b981, #3b82f6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            cursor: "pointer",
          } }
          onClick={ () => handleMenuClick("#hero") }
        >
          PS
        </motion.div>

        {/* Desktop Navigation */ }
        { !isMobile && (
          <motion.nav
            variants={ staggerContainer }
            animate="animate"
            style={ {
              display: "flex",
              alignItems: "center",
              gap: "2rem",
            } }
          >
            { menuItems.map((item) => (
              <motion.a
                key={ item.key }
                variants={ menuItemVariants }
                whileHover="hover"
                whileTap={ { scale: 0.95 } }
                transition={ {
                  duration: 0.4,
                  ease: "easeOut"
                } }
                style={ {
                  color: isDarkMode ? "#e5e7eb" : "#374151",
                  textDecoration: "none",
                  fontWeight: 500,
                  fontSize: "1rem",
                  cursor: "pointer",
                  position: "relative",
                  padding: "0.5rem 1rem",
                  borderRadius: "12px",
                  transition: "all 0.2s ease",
                } }
                onClick={ () => handleMenuClick(item.href, item.external) }
                onMouseEnter={ (e) => {
                  e.currentTarget.style.backgroundColor = "rgba(16, 185, 129, 0.15)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(16, 185, 129, 0.2)";
                } }
                onMouseLeave={ (e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                } }
              >
                { item.label }
              </motion.a>
            )) }

            {/* Dark Mode Toggle */ }
            <motion.div
              whileHover={ { scale: 1.1 } }
              whileTap={ { scale: 0.9 } }
            >
              <Button
                type="text"
                icon={ isDarkMode ? <SunOutlined /> : <MoonOutlined /> }
                onClick={ toggleDarkMode }
                style={ {
                  color: isDarkMode ? "#e5e7eb" : "#374151",
                  border: `1px solid ${isDarkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"}`,
                  borderRadius: "12px",
                  backgroundColor: isDarkMode ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                } }
              />
            </motion.div>
          </motion.nav>
        ) }

        {/* Mobile Menu Button */ }
        { isMobile && (
          <motion.div
            style={ { display: "flex", alignItems: "center", gap: "1rem" } }
          >
            {/* Dark Mode Toggle for Mobile */ }
            <motion.div
              whileHover={ { scale: 1.1 } }
              whileTap={ { scale: 0.9 } }
            >
              <Button
                type="text"
                icon={ isDarkMode ? <SunOutlined /> : <MoonOutlined /> }
                onClick={ toggleDarkMode }
                style={ {
                  color: isDarkMode ? "#e5e7eb" : "#374151",
                  border: `1px solid ${isDarkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"}`,
                  borderRadius: "12px",
                  backgroundColor: isDarkMode ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)",
                } }
              />
            </motion.div>

            <motion.div
              whileHover={ { scale: 1.1 } }
              whileTap={ { scale: 0.9 } }
            >
              <Button
                type="text"
                icon={ isMobileMenuOpen ? <CloseOutlined /> : <MenuOutlined /> }
                onClick={ () => setIsMobileMenuOpen(!isMobileMenuOpen) }
                style={ {
                  color: isDarkMode ? "#e5e7eb" : "#374151",
                  border: `1px solid ${isDarkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"}`,
                  borderRadius: "12px",
                  backgroundColor: isDarkMode ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)",
                  fontSize: "1.2rem",
                } }
              />
            </motion.div>
          </motion.div>
        ) }
      </motion.div>

      {/* Mobile Menu Dropdown */ }
      <AnimatePresence>
        { isMobile && isMobileMenuOpen && (
          <motion.div
            variants={ mobileMenuVariants }
            initial="closed"
            animate="open"
            exit="closed"
            transition={ {
              duration: 0.4,
              ease: [0.4, 0, 0.2, 1]
            } }
            style={ {
              position: "absolute",
              top: "100%",
              left: "2rem",
              right: "2rem",
              marginTop: "0.5rem",
              background: isDarkMode ? "rgba(24, 24, 27, 0.95)" : "rgba(248, 250, 252, 0.95)",
              backdropFilter: "blur(20px)",
              border: `1px solid ${isDarkMode ? "rgba(255, 255, 255, 0.12)" : "rgba(0, 0, 0, 0.12)"}`,
              borderRadius: "20px",
              padding: "1.5rem",
              boxShadow: isDarkMode ? "0 8px 32px rgba(0, 0, 0, 0.3)" : "0 8px 32px rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
            } }
          >
            <motion.nav
              variants={ staggerContainer }
              animate="animate"
              style={ {
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              } }
            >
              { menuItems.map((item) => (
                <motion.a
                  key={ item.key }
                  variants={ menuItemVariants }
                  whileHover="hover"
                  whileTap={ { scale: 0.95 } }
                  transition={ {
                    duration: 0.3,
                    ease: "easeOut"
                  } }
                  style={ {
                    color: isDarkMode ? "#e5e7eb" : "#374151",
                    textDecoration: "none",
                    fontWeight: 500,
                    fontSize: "1.1rem",
                    cursor: "pointer",
                    padding: "1rem",
                    borderRadius: "12px",
                    transition: "all 0.2s ease",
                    textAlign: "center",
                  } }
                  onClick={ () => handleMenuClick(item.href, item.external) }
                  onMouseEnter={ (e) => {
                    e.currentTarget.style.backgroundColor = "rgba(16, 185, 129, 0.15)";
                    e.currentTarget.style.transform = "translateX(5px)";
                  } }
                  onMouseLeave={ (e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.transform = "translateX(0)";
                  } }
                >
                  { item.label }
                </motion.a>
              )) }
            </motion.nav>
          </motion.div>
        ) }
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
