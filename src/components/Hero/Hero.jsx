import React from 'react';
import {
  ProfileImage,
  HeroContainer,
  HeroBg,
  HeroContent,
  HeroH1,
  HeroP,
} from './Hero.style';
import 'animate.css';

export default function Hero() {
  return (
    <HeroContainer>
      <HeroBg></HeroBg>
      <HeroContent>
        <HeroH1 className='animate__animated animate__fadeInDown'>
          Welcome to my profile page
        </HeroH1>
        <ProfileImage></ProfileImage>
        <HeroP>
          I am a Full-stack web developer with over 5+ years of experience in
          coding.Developed varieties of applications and projects through-out
          the course. Have a look at my projects and resume for more info
        </HeroP>
      </HeroContent>
    </HeroContainer>
  );
}
