import styled from 'styled-components';
import ResumeBg from '../../assets/images/background/resume-bg.jpg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(0, 0, 0, 0.5) 100%,
      #000 80%
    ),
    url(${ResumeBg});
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

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* 
  @media screen and (max-width: 760px) {
    height: 1100px;
  }

  @media screen and(max-width: 480px) {
    height: 1000px;
  } */
`;
export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 30px;
  padding: 0 20px;
  margin-bottom: 3rem;
  margin-top: 1rem;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: rgba(253, 253, 253, 0.12);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  min-height: 160px;
  min-width: 260px;
  margin-bottom: 2px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.15s ease-in-out;
    cursor: pointer;
  }
`;

export const CardIcon = styled.img`
  height: 130px;
  min-width: 130px;
`;

export const HeaderH1 = styled.h1`
  padding: 1.5rem;
  font-size: 20px;
  color: #ffff;
`;
export const Text = styled.p`
  padding: 0 2rem 2rem;
  font-size: 15px;
  color: #ffff;
  line-height: 150%;
`;
