import React from "react";
import { Layout } from "antd";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import HeroSection from "./components/Hero";

const { Content, Footer } = Layout;

const App: React.FC = () => {
  return (
    <Layout className="min-h-screen" style={{ padding: '30px', paddingTop: 0, background: 'none' }}>
      <Content
        style={{
          paddingLeft: 16,
          paddingRight: 16,
          paddingBottom: 32,
          display: 'flex',
          flexDirection: 'column',
          gap: '2.5rem'
        }}
      >
        <HeroSection />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />

      </Content>
      <Footer
        style={{
          background: 'rgba(0,0,0,0.05)',
          boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
          textAlign: 'center',
          padding: '12px 0',
          borderTopLeftRadius: '1.5rem',
          borderTopRightRadius: '1.5rem',
        }}
      >
        <span
          style={{
            color: '#22c55e',
            fontSize: '0.95rem',
            fontWeight: 600,
            letterSpacing: '0.02em',
          }}
        >
          © {new Date().getFullYear()} Pavithra Sandamini · Software Engineer
        </span>
      </Footer>
    </Layout>
  );
};

export default App;
