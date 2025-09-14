import React from "react";
import { Image } from "antd";

interface SkillCardProps {
  src: string;
  alt?: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ src, alt }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#ffffff",
      borderRadius: "12px",
      boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
      padding: "12px",
      width: "80px",
      height: "80px",
      minWidth: "60px",
      minHeight: "60px",
    }}
  >
    <Image
      src={src}
      alt={alt}
      preview={false}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "contain",
      }}
    />
  </div>
);

export default SkillCard;
