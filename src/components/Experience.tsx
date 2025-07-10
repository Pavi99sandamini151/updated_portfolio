import React from "react";
import { Card } from "antd";
import { experience } from "../data/experince";
import { motion } from "framer-motion";

const Experience: React.FC = () => {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      style={{ padding: "2rem 1rem" }}
    >
      <h2
        style={{
          fontSize: "1.5rem",
          fontWeight: 600,
          marginBottom: "1.5rem",
          textAlign: "left",
        }}
      >
        Experience
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {experience.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card
              bordered={false}
              style={{
                border: "1px solid rgb(106, 208, 143)",
                margin: "15px 0",
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                borderRadius: "8px",
              }}
              title={
                <span
                  style={{
                    borderBottom: "2px solid rgb(105, 227, 150)",
                    paddingBottom: "4px",
                    color: "rgb(106, 208, 143)",
                    fontSize: "1.125rem",
                    fontWeight: 600,
                  }}
                >
                  {item.role}
                </span>
              }
            >
              <p
                style={{
                  color: "#ffffff",
                  fontWeight: 600,
                  marginBottom: "0.5rem",
                }}
              >
                {item.company} · {item.duration}
              </p>

              <div style={{ marginTop: "0.75rem" }}>
                {item.description.map((project, pIdx) => (
                  <div key={pIdx} style={{ marginBottom: "1rem" }}>
                    <p
                      style={{
                        fontWeight: 500,
                        color: "#ffffff",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {project.project}
                    </p>
                    <ul style={{ paddingLeft: "1.25rem", color: "#ffffff" }}>
                      {project.tasks.map((task, tIdx) => (
                        <li key={tIdx} style={{ marginBottom: "0.25rem" }}>
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;
