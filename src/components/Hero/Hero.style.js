import styled from 'styled-components';
import HeroBackground from '../../assets/images/background/hero-bg.jpg';
import ProfileImg from '../../assets/images/profile-pic.png';

export const ProfileImage = styled.div`
  display: flex;
  align-content: center;
  margin-top: 2rem;
  background-image: url(${ProfileImg});
  background-repeat: no-repeat;
  background-position: center;
  width: 209px;
  height: 225px;
  border-radius: 5px;
  max-height: 340px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  background-color: white;

  &:hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const HeroContainer = styled.div`
  display: flex;
  position: relative;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(0, 0, 0, 0.5) 100%,
      #000 80%
    ),
    url(${HeroBackground});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: scroll;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  position: relative;
  z-index: 1;
`;

export const HeroBg = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1000px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroH1 = styled.h1`
  color: ${({ theme }) => theme.colors.secondaryColor}; //white
  font-size: 48px;
  text-align: center;

  @media screen and(max-width: 760px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroP = styled.p`
  margin-top: 5rem;
  color: ${({ theme }) => theme.colors.fontColor};
  font-size: 1.5rem;
  text-align: center;
  max-width: 600px;

  @media screen and(max-width: 760px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;
