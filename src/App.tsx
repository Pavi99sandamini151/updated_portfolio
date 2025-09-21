import { Layout } from "antd";
import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import HeroSection from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { ThemeProvider } from "./contexts/ThemeContext";

const { Content } = Layout;

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Layout className="min-h-screen" style={ { paddingTop: 0, background: 'none' } }>
        <Content
          style={ {
            paddingLeft: 16,
            paddingRight: 16,
            paddingBottom: 32,
            display: 'flex',
            flexDirection: 'column',
            gap: '2.5rem'
          } }
        >
          <HeroSection />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />

        </Content>
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
