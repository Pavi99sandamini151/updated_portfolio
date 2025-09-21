import React from "react";
import { useTheme } from "../contexts/ThemeContext";

const Footer: React.FC = () => {
    const { isDarkMode } = useTheme();

    const footerStyle: React.CSSProperties = {
        background: isDarkMode
            ? 'rgba(30, 30, 35, 0.6)'
            : 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(10px)',
        borderTop: `1px solid ${isDarkMode
            ? 'rgba(255, 255, 255, 0.1)'
            : 'rgba(0, 0, 0, 0.1)'}`,
        textAlign: 'center',
        padding: '1.5rem 1rem',
        marginTop: '2rem',
    };

    const textStyle: React.CSSProperties = {
        color: isDarkMode ? '#94a3b8' : '#64748b',
        fontSize: '0.9rem',
        fontWeight: '500',
        margin: 0,
    };

    return (
        <footer style={ footerStyle }>
            <p style={ textStyle }>
                © { new Date().getFullYear() } Pavithra Sandamini · Software Engineer
            </p>
        </footer>
    );
};

export default Footer;