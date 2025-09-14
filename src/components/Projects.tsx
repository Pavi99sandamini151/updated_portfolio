import React from "react";
import { Card, Tag, Button } from "antd";
import { projects } from "../data/project";
import { motion } from "framer-motion";

const Projects: React.FC = () => {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      style={{ padding: "2rem 1rem" }}
    >
      <h2
        style={{
          fontSize: "2.5rem",
          fontWeight: 600,
          marginBottom: "1.5rem",
        }}
      >
        Projects
      </h2>

      <div
        style={{
          display: "grid",
          gap: "1.5rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card
              title={project.title}
              extra={
                <Button type="link" href={project.link} target="_blank">
                  View
                </Button>
              }
              style={{
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
              }}
            >
              <p style={{ color: "#ffffff", marginBottom: "1rem" }}>
                {project.description}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {project.tech.map((tech, idx) => (
                  <Tag key={idx} color="blue">
                    {tech}
                  </Tag>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
