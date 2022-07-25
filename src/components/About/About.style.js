import styled from 'styled-components';
import AboutBg from '../../assets/images/background/about-bg2.jpg';
import ProfileImg from '../../assets/images/profile-pic2.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(0, 0, 0, 0.5) 100%,
      #000 80%
    ),
    url(${AboutBg});
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
`;

export const ProfileImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  top: 90px;
  bottom: 0;
  left: 5vh;
`;

export const ProfileImage = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  background-image: url(${ProfileImg});
  background-repeat: no-repeat;
  background-position: center;
  width: 170px;
  height: 210px;
  border-radius: 5px;
  max-height: 340px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  background-color: white;

  @media screen and (max-width: 680px) {
    display: flex;
    flex-direction: column;
  }

  &:hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ProjectWrapper = styled.div`
  max-width: 100vh;
  margin-top: 10rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  margin-bottom: 3rem;

  @media screen and (max-width: 1000px) {
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
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  height: 440px;
  padding: 40px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ProjectIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const AboutH1 = styled.h1`
  font-size: 1rem;
  font-weight: 700;
  margin-top: 0.5rem;
`;

export const AboutH2 = styled.p`
  color: white;
  font-size: 20px;
  margin-top: 3rem;
  max-width: 50%;
  word-wrap: break-word;
  line-height: 2.5rem;
`;
