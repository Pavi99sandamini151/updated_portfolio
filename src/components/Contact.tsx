import emailjs from "@emailjs/browser";
import { message as AntMessage, Button, Form, Grid, Input } from "antd";
import { motion } from "framer-motion";
import React from "react";
import { useTheme } from "../contexts/ThemeContext";

const { useBreakpoint } = Grid;

interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [form] = Form.useForm();
  const screens = useBreakpoint();
  const { isDarkMode } = useTheme();

  const onFinish = (values: ContactFormValues) => {
    const { name, email, message } = values;

    emailjs
      .send(
        "service_k4t41ck",
        "template_96t8zjt",
        {
          name,
          email,
          message,
        },
        "LmaRZ82zSFMg93IDN"
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result);
          form.resetFields();
          AntMessage.success("Message sent successfully!");
        },
        (error) => {
          console.error("EmailJS error:", error);
          AntMessage.error("Failed to send message. Please try again.");
        }
      );
  };

  // Compact Modern Container
  const containerStyle: React.CSSProperties = {
    position: "relative",
    minHeight: "60vh",
    display: "flex",
    flexDirection: "column",
    padding: screens.lg ? "2rem 0" : screens.md ? "1.5rem 0" : "1rem 0",
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

  // Centered Content Container
  const contentStyle: React.CSSProperties = {
    position: "relative",
    zIndex: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: screens.lg ? "2rem" : screens.md ? "1.5rem" : "1rem",
    padding: screens.lg ? "2.5rem" : screens.md ? "2rem" : "1.5rem",
    height: "100%",
    maxWidth: "600px",
    margin: "0 auto",
  };

  // Title and Subtitle Styles
  const titleStyle: React.CSSProperties = {
    fontSize: screens.lg ? "clamp(2rem, 3vw, 2.5rem)" : screens.md ? "2rem" : "1.75rem",
    fontWeight: "800",
    background: "linear-gradient(135deg, #10b981 0%, #3b82f6 50%, #8b5cf6 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    marginBottom: "0.75rem",
    letterSpacing: "-0.02em",
    lineHeight: "1.1",
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: screens.lg ? "1.1rem" : screens.md ? "1rem" : "0.95rem",
    color: isDarkMode ? "#94a3b8" : "#64748b",
    fontWeight: "400",
    lineHeight: "1.6",
    opacity: 0.9,
    marginBottom: "0",
    maxWidth: "500px",
  };

  // Compact Form Container Style
  const formContainerStyle: React.CSSProperties = {
    background: isDarkMode
      ? "rgba(30, 30, 35, 0.2)"
      : "rgba(255, 255, 255, 0.3)",
    borderRadius: "16px",
    padding: screens.lg ? "2rem" : screens.md ? "1.5rem" : "1.25rem",
    border: `1px solid ${isDarkMode
      ? "rgba(255, 255, 255, 0.08)"
      : "rgba(0, 0, 0, 0.04)"}`,
    backdropFilter: "blur(16px)",
    boxShadow: isDarkMode
      ? "0 8px 32px rgba(0, 0, 0, 0.3)"
      : "0 8px 32px rgba(0, 0, 0, 0.08)",
  };

  return (
    <motion.section
      id="contact"
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

      {/* Content */ }
      <div style={ contentStyle }>
        {/* Header Section */ }
        <motion.div
          initial={ { opacity: 0, y: 20 } }
          whileInView={ { opacity: 1, y: 0 } }
          transition={ { duration: 0.6, delay: 0.1 } }
          viewport={ { once: true } }
          style={ { textAlign: "center" } }
        >
          <h2 style={ titleStyle }>Get In Touch</h2>
          <p style={ subtitleStyle }>
            Ready to bring your ideas to life? Let's connect and create something amazing together.
          </p>
        </motion.div>

        {/* Contact Form */ }
        <motion.div
          initial={ { opacity: 0, y: 30 } }
          whileInView={ { opacity: 1, y: 0 } }
          transition={ { duration: 0.6, delay: 0.2 } }
          viewport={ { once: true } }
          style={ { ...formContainerStyle, width: "100%" } }
        >
          <Form
            form={ form }
            onFinish={ onFinish }
            layout="vertical"
            size="large"
            style={ {
              '--ant-primary-color': '#10b981',
              '--ant-primary-color-hover': '#059669',
            } as React.CSSProperties }
          >
            <Form.Item
              label={ <span style={ { color: isDarkMode ? '#ffffff' : '#1e293b', fontWeight: '600' } }>Name</span> }
              name="name"
              rules={ [{ required: true, message: "Please enter your name" }] }
            >
              <Input
                placeholder="Your full name"
                style={ {
                  background: isDarkMode ? 'rgba(30, 30, 35, 0.5)' : 'rgba(255, 255, 255, 0.8)',
                  border: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                  borderRadius: '8px',
                  color: isDarkMode ? '#ffffff' : '#1e293b',
                } }
              />
            </Form.Item>

            <Form.Item
              label={ <span style={ { color: isDarkMode ? '#ffffff' : '#1e293b', fontWeight: '600' } }>Email</span> }
              name="email"
              rules={ [
                { type: "email", required: true, message: "Enter a valid email" },
              ] }
            >
              <Input
                placeholder="your.email@example.com"
                style={ {
                  background: isDarkMode ? 'rgba(30, 30, 35, 0.5)' : 'rgba(255, 255, 255, 0.8)',
                  border: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                  borderRadius: '8px',
                  color: isDarkMode ? '#ffffff' : '#1e293b',
                } }
              />
            </Form.Item>

            <Form.Item
              label={ <span style={ { color: isDarkMode ? '#ffffff' : '#1e293b', fontWeight: '600' } }>Message</span> }
              name="message"
              rules={ [{ required: true, message: "Please enter a message" }] }
            >
              <Input.TextArea
                rows={ 5 }
                placeholder="Tell me about your project..."
                style={ {
                  background: isDarkMode ? 'rgba(30, 30, 35, 0.5)' : 'rgba(255, 255, 255, 0.8)',
                  border: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                  borderRadius: '8px',
                  color: isDarkMode ? '#ffffff' : '#1e293b',
                  resize: 'none',
                } }
              />
            </Form.Item>

            <Form.Item style={ { marginBottom: 0 } }>
              <Button
                htmlType="submit"
                type="primary"
                block
                size="large"
                style={ {
                  background: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)',
                  border: 'none',
                  borderRadius: '12px',
                  height: '48px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  boxShadow: '0 4px 16px rgba(16, 185, 129, 0.3)',
                  transition: 'all 0.3s ease',
                } }
                onMouseEnter={ (e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(16, 185, 129, 0.4)';
                } }
                onMouseLeave={ (e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(16, 185, 129, 0.3)';
                } }
              >
                Send Message
              </Button>
            </Form.Item>
          </Form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
