import React from "react";
import { Card, Typography } from "antd";
import { experience } from "../data/experince";
import { motion } from "framer-motion";

const { Title, Text } = Typography;

const Experience: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    backgroundColor: "#1f2937",
    borderRadius: "12px",
    padding: "2rem",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
    transition: "box-shadow 0.16s ease-out",
    margin: "1rem 0",
  };

  const headerStyle: React.CSSProperties = {
    width: "80%",
    marginBottom: "2rem",
  };


  const mainTitleStyle: React.CSSProperties = {
    fontSize: "2.5rem",
    fontWeight: 600,
    marginBottom: "1rem",
    color: "#ffffff",
  };
  
  const timelineContainerStyle: React.CSSProperties = {
    position: "relative",
    paddingLeft: "1.25rem",
    marginTop: "3rem",
  };

  const timelineLineStyle: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "1px",
    height: "100%",
    borderLeft: "1px solid #dddadaff",
  };

  const experienceItemStyle: React.CSSProperties = {
    marginBottom: "2rem",
    position: "relative",
  };

  const dateBadgeStyle: React.CSSProperties = {
    position: "relative",
    display: "inline-block",
    padding: "0.5rem 1rem",
    borderRadius: "9999px",
    border: "1px dashed rgba(0, 0, 0, 0.2)",
    fontFamily: "monospace",
    fontWeight: 500,
    textTransform: "uppercase",
    fontSize: "12px",
    letterSpacing: "0.5px",
    color: "#36383bff",
    backgroundColor: "#eff1f4ff",
    marginBottom: "0.75rem",
  };

  const dateBadgeBeforeStyle: React.CSSProperties = {
    position: "absolute",
    top: "50%",
    left: "-20px",
    width: "20px",
    height: "1px",
    borderTop: "1px dashed rgba(0, 0, 0, 0.2)",
    content: "''",
    transform: "translateY(-50%)",
  };

  const dateBadgeAfterStyle: React.CSSProperties = {
    position: "absolute",
    top: "50%",
    left: "-22px",
    width: "5px",
    height: "5px",
    backgroundColor: "#000000",
    borderRadius: "50%",
    transform: "translateY(-50%)",
  };

  const roleTitleStyle: React.CSSProperties = {
    fontSize: "1.25rem",
    fontWeight: 500,
    margin: "0.75rem 0 0.5rem 0",
    color: "#ffffff",
  };

  const companyStyle: React.CSSProperties = {
    color: "#c4cbdaff",
    fontWeight: 500,
    display: "block",
    marginBottom: "1rem",
  };

  const projectCardStyle: React.CSSProperties = {
    backgroundColor: "#22272fff",
    borderRadius: "8px",
    padding: "1rem",
    boxShadow: "0 4px 8px #13362aff",
    borderLeft: "4px solid #10b981",
    marginBottom: "1rem",
  };

  const projectTitleStyle: React.CSSProperties = {
    fontWeight: 500,
    color: "#ffffff",
    marginBottom: "0.5rem",
  };

  const taskItemStyle: React.CSSProperties = {
    fontSize: "14px",
    color: "#ffffff",
    display: "flex",
    alignItems: "flex-start",
    marginBottom: "0.25rem",
  };

  const bulletStyle: React.CSSProperties = {
    color: "#10b981",
    marginRight: "0.5rem",
    marginTop: "0.25rem",
  };

  return (
    <motion.div
      id="experience"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      style={containerStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 8px 30px rgba(0, 0, 0, 0.12)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.08)";
      }}
    >
      {/* Header Section */}
      <div style={headerStyle}>
        <Title level={1} style={mainTitleStyle}>
          Experience
        </Title>
      </div>

      {/* Timeline Section */}
      <div style={timelineContainerStyle}>
        <div style={timelineLineStyle}></div>
        
        {/* Experience Items */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
          {experience.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={experienceItemStyle}
            >
              {/* Date Badge */}
              <div style={{ position: "relative", marginBottom: "0.75rem" }}>
                <span style={dateBadgeStyle}>
                  {item.duration}
                </span>
                <div style={dateBadgeBeforeStyle}></div>
                <div style={dateBadgeAfterStyle}></div>
              </div>
              
              {/* Role Title */}
              <Title level={3} style={roleTitleStyle}>
                {item.role}
              </Title>
              
              {/* Company */}
              <Text style={companyStyle}>
                {item.company}
              </Text>

              {/* Description/Projects */}
              <div style={{ marginTop: "1rem" }}>
                {item.description.map((project, pIdx) => (
                  <Card
                    key={pIdx}
                    size="small"
                    style={projectCardStyle}
                    bordered={false}
                  >
                    <Text style={projectTitleStyle}>
                      {project.project}
                    </Text>
                    <div style={{ marginTop: "0.5rem" }}>
                      {project.tasks.map((task, tIdx) => (
                        <div key={tIdx} style={taskItemStyle}>
                          <span style={bulletStyle}>•</span>
                          <span>{task}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;