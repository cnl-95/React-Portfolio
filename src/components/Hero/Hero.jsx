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
          Welcome
        </HeroH1>
        <ProfileImage></ProfileImage>
        <HeroP>
          Full Stack Web Developer with 1 year of experience in designing and developing user interfaces, testing and debugging applications. I have the proven ability to optimize web functionalities that improve data retrieval and workflow efficiencies.
        </HeroP>
      </HeroContent>
    </HeroContainer>
  );
}
