import styled from 'styled-components';
import ProjectBg from '../../assets/images/background/projects-bg.jpg';

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background: ${({ theme }) => theme.colors.pBgColor}; */
  min-height: 100vh;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(0, 0, 0, 0.5) 100%,
      #000 80%
    ),
    url(${ProjectBg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: scroll;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  min-height: 100vh;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 760px) {
    height: 1100px;
  }

  @media screen and(max-width: 480px) {
    height: 1000px;
  }
`;

export const ProjectWrapper = styled.div`
  max-width: 100vh;
  margin: 0 auto;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;
  margin-bottom: 3rem;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ProjectCard = styled.div`
  background: #ffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  min-height: 100%;
  padding: 40px;
  background: rgba(253, 253, 253, 0.25);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;

export const ProjectIcon = styled.img`
  height: 160px;
  width: 240px;
  margin-bottom: 10px;
`;

export const ProjectH1 = styled.h1`
  font-size: 2.5rem;
  color: #ffff;
  margin: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ProjectH2 = styled.h1`
  color: #000;
  font-size: 1rem;
  margin-top: 0.5rem;
  text-decoration: none;

  :hover {
    color: #00c9a7;
    transition: 0.1s ease-in-out;
  }

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;
