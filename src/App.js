import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Routes, Route } from 'react-router-dom';

import MobileSideBar from './components/MobileSideBar/MobileSideBar';
import Header from './components/Navbar/Header';
import Hero from './components/Hero/Hero';
import ProjectCard from './components/Profile/ProjectCards';
import Footer from './components/Footer/Footer';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import ResumePage from './pages/ResumePage';
import styled from 'styled-components';

const theme = {
  colors: {
    header: '#a08b9c',
    activeNavLink: '#375875',
    hero: '#ffffff',
    footer: '#a08b9c',
    fontColor: '#ffff',
    pBgColor: '#ffffff',
    sBgColor: '#A7BAC9',
    pColor: '#93939d',
    sColor: '#f3f6f6',
  },
};

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <BrowserRouter>
          <MobileSideBar isOpen={isOpen} toggleMenu={toggleMenu} />
          <Header toggleMenu={toggleMenu} />
          <Routes>
            <Route path='/' element={<Hero />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/profile' element={<ProjectCard />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/resume' element={<ResumePage />} />
          </Routes>
          <ProjectContainer />
          <Footer />
        </BrowserRouter>
      </>
    </ThemeProvider>
  );
}

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  /* height: 30vh; */
`;
