import React from "react";
import { Card, Row, Col, Typography } from "antd";
import { motion } from "framer-motion";
import { BookOutlined } from "@ant-design/icons";

const { Title } = Typography;

const About: React.FC = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
      style={{ padding: "1rem" }}
    >
      <h2 style={{ fontSize: "2.5rem", fontWeight: 600, marginBottom: "1rem" }}>
        About Me
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Card style={{ backgroundColor: "#1f2937", border: "none", padding: 0 }}>
          <Row gutter={[32, 32]} align="middle">
            {/* Profile Image */}
            <Col
              xs={24}
              md={10}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "350px",
                  height: "350px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "3px solid #22c55e",
                  background: "#23272f",
                }}
              >
                <img
                  src="/profile.jpeg"
                  alt="Pavithra Sandamini"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </Col>

            {/* Description */}
            <Col xs={24} md={14}>
              <p
                style={{
                  color: "#ffffff",
                  fontSize: "1rem",
                  lineHeight: "1.75rem",
                  margin: 0,
                }}
              >
                I'm Pavithra Sandamini, a passionate Software Engineer specializing in frontend
                development with React, TypeScript, Ant Design, and Tailwind CSS.
                <br />
                <br />
                I enjoy building clean, responsive, and user-focused interfaces, and I’m always exploring modern tools to
                create scalable web applications. In addition to frontend expertise,
                I have hands-on experience with cloud platforms like AWS and Azure, infrastructure-as-code
                using Terraform, and container orchestration with Kubernetes—enabling me to contribute across
                both development and DevOps workflows.
              </p>

              {/* Education Card */}
              <div
                style={{
                  marginTop: "1.5rem",
                  background: "rgba(34, 197, 94, 0.1)",
                  border: "1px solid #22c55e",
                  borderRadius: "8px",
                  padding: "1rem",
                }}
              >
                <Title level={5} style={{ color: "#22c55e", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <BookOutlined /> Education
                </Title>
                <p style={{ color: "#ffffff", fontWeight: 500, marginBottom: 4 }}>
                  University of Colombo School of Computing, Sri Lanka
                </p>
                <p style={{ color: "#cbd5e1", marginBottom: 4 }}>
                  <strong>Bachelor of Science in Computer Science (BSc. CS)</strong>
                  <br />
                  <span style={{ fontSize: "0.95rem" }}>(2019 - 2023)</span>
                </p>
                <p style={{ color: "#a3e635", fontWeight: 600 }}>
                  GPA: 3.41
                </p>
              </div>
            </Col>
          </Row>
        </Card>
      </motion.div>
    </motion.section>
  );
};

export default About;
