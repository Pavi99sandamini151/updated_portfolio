import { Grid, Image } from "antd";
import React from "react";
import { useTheme } from "../contexts/ThemeContext";

const { useBreakpoint } = Grid;

interface SkillCardProps {
  src: string;
  alt?: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ src, alt }) => {
  const screens = useBreakpoint();
  const { isDarkMode } = useTheme();

  // Compact Modern Glass Card Style
  const cardStyle: React.CSSProperties = {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: isDarkMode
      ? `linear-gradient(135deg, 
          rgba(30, 30, 35, 0.95) 0%, 
          rgba(24, 24, 27, 0.85) 100%)`
      : `linear-gradient(135deg, 
          rgba(255, 255, 255, 0.98) 0%, 
          rgba(248, 250, 252, 0.95) 100%)`,
    backdropFilter: "blur(20px) saturate(180%)",
    borderRadius: screens.lg ? "12px" : "10px",
    border: `1px solid ${isDarkMode
      ? "rgba(255, 255, 255, 0.15)"
      : "rgba(0, 0, 0, 0.06)"}`,
    padding: screens.lg ? "12px" : screens.md ? "10px" : "8px",
    width: screens.lg ? "72px" : screens.md ? "64px" : "56px",
    height: screens.lg ? "72px" : screens.md ? "64px" : "56px",
    boxShadow: isDarkMode
      ? `
        0 4px 16px rgba(0, 0, 0, 0.25),
        inset 0 1px 0 rgba(255, 255, 255, 0.1),
        0 0 0 1px rgba(16, 185, 129, 0.08)`
      : `
        0 4px 16px rgba(0, 0, 0, 0.06),
        inset 0 1px 0 rgba(255, 255, 255, 0.95),
        0 0 0 1px rgba(16, 185, 129, 0.1)`,
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    cursor: "pointer",
    overflow: "hidden",
  };

  // Image Container Style
  const imageContainerStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    zIndex: 2,
  };

  // Compact Image Style
  const imageStyle: React.CSSProperties = {
    width: screens.lg ? "32px" : screens.md ? "28px" : "24px",
    height: screens.lg ? "32px" : screens.md ? "28px" : "24px",
    objectFit: "contain",
    filter: isDarkMode
      ? "brightness(1.15) contrast(1.1) saturate(1.3)"
      : "brightness(1.05) contrast(1.05) saturate(1.15)",
    transition: "all 0.3s ease",
    marginBottom: "4px",
  };

  // Skill name label style (always visible)
  const skillLabelStyle: React.CSSProperties = {
    fontSize: screens.lg ? "10px" : "9px",
    fontWeight: "500",
    color: isDarkMode ? "#cbd5e1" : "#475569",
    textAlign: "center",
    lineHeight: "1.2",
    maxWidth: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    opacity: 0.8,
    transition: "all 0.3s ease",
  };

  // Enhanced tooltip style (shown on hover)
  const tooltipStyle: React.CSSProperties = {
    position: "absolute",
    bottom: "-2.8rem",
    left: "50%",
    transform: "translateX(-50%)",
    background: isDarkMode
      ? "rgba(0, 0, 0, 0.95)"
      : "rgba(255, 255, 255, 0.98)",
    color: isDarkMode ? "#ffffff" : "#1f2937",
    padding: "0.4rem 0.8rem",
    borderRadius: "6px",
    fontSize: "0.7rem",
    fontWeight: "600",
    whiteSpace: "nowrap",
    opacity: 0,
    pointerEvents: "none",
    transition: "all 0.3s ease",
    zIndex: 10,
    backdropFilter: "blur(12px)",
    border: `1px solid ${isDarkMode
      ? "rgba(255, 255, 255, 0.12)"
      : "rgba(0, 0, 0, 0.08)"}`,
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
  };

  return (
    <div
      style={ cardStyle }
      onMouseEnter={ (e) => {
        const target = e.currentTarget as HTMLElement;
        const tooltip = target.querySelector('.skill-tooltip') as HTMLElement;

        // Enhanced hover effect
        target.style.transform = "translateY(-3px) scale(1.08)";
        target.style.boxShadow = isDarkMode
          ? `
            0 12px 32px rgba(0, 0, 0, 0.35),
            0 0 16px rgba(16, 185, 129, 0.25),
            inset 0 1px 0 rgba(255, 255, 255, 0.2)`
          : `
            0 12px 32px rgba(0, 0, 0, 0.1),
            0 0 16px rgba(16, 185, 129, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 1)`;

        // Show tooltip
        if (tooltip) {
          tooltip.style.opacity = "1";
          tooltip.style.transform = "translateX(-50%) translateY(-4px)";
        }

        // Enhance skill label
        const skillLabel = target.querySelector('.skill-label') as HTMLElement;
        if (skillLabel) {
          skillLabel.style.opacity = "1";
          skillLabel.style.color = isDarkMode ? "#ffffff" : "#1e293b";
        }
      } }
      onMouseLeave={ (e) => {
        const target = e.currentTarget as HTMLElement;
        const tooltip = target.querySelector('.skill-tooltip') as HTMLElement;

        // Reset hover effect
        target.style.transform = "translateY(0) scale(1)";
        target.style.boxShadow = isDarkMode
          ? `
            0 4px 16px rgba(0, 0, 0, 0.25),
            inset 0 1px 0 rgba(255, 255, 255, 0.1),
            0 0 0 1px rgba(16, 185, 129, 0.08)`
          : `
            0 4px 16px rgba(0, 0, 0, 0.06),
            inset 0 1px 0 rgba(255, 255, 255, 0.95),
            0 0 0 1px rgba(16, 185, 129, 0.1)`;

        // Hide tooltip
        if (tooltip) {
          tooltip.style.opacity = "0";
          tooltip.style.transform = "translateX(-50%) translateY(0)";
        }

        // Reset skill label
        const skillLabel = target.querySelector('.skill-label') as HTMLElement;
        if (skillLabel) {
          skillLabel.style.opacity = "0.8";
          skillLabel.style.color = isDarkMode ? "#cbd5e1" : "#475569";
        }
      } }
    >
      {/* Image Container */ }
      <div style={ imageContainerStyle }>
        <Image
          src={ src }
          alt={ alt }
          preview={ false }
          style={ imageStyle }
          onError={ (e) => {
            // Fallback for missing images
            const target = e.target as HTMLImageElement;
            target.style.display = "none";
            const parent = target.parentElement;
            if (parent) {
              parent.innerHTML = `
                <div style="
                  width: ${screens.lg ? "32px" : screens.md ? "28px" : "24px"}; 
                  height: ${screens.lg ? "32px" : screens.md ? "28px" : "24px"}; 
                  display: flex; 
                  align-items: center; 
                  justify-content: center; 
                  font-size: ${screens.lg ? "14px" : "12px"}; 
                  font-weight: 600; 
                  color: ${isDarkMode ? '#64748b' : '#94a3b8'};
                  text-transform: uppercase;
                  letter-spacing: 0.5px;
                  margin-bottom: 4px;
                ">
                  ${alt?.charAt(0) || '?'}
                </div>
              `;
            }
          } }
        />
      </div>

      {/* Skill Name Label */ }
      <div className="skill-label" style={ skillLabelStyle }>
        { alt }
      </div>

      {/* Enhanced Tooltip */ }
      <div className="skill-tooltip" style={ tooltipStyle }>
        { alt }
      </div>
    </div>
  );
};

export default SkillCard;
