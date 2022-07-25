import React from 'react';
import {
  Container,
  ProfileImageWrapper,
  ProfileImage,
  AboutH1,
  AboutH2,
} from './About.style';
import { ProjectCard, ProjectWrapper, ProjectIcon } from './About.style';

import Icon1 from '../../assets/images/svg/coding1.svg';
import Icon2 from '../../assets/images/svg/coding2.svg';
import Icon3 from '../../assets/images/svg/coding3.svg';

export default function About() {
  return (
    <>
      <Container>
        <ProfileImageWrapper>
          <ProfileImage></ProfileImage>
        </ProfileImageWrapper>
        <AboutH2>
          Hi, my name is Sophoan Meas. I decided to continue with my programming
          skill in the field of web developing after graduation and got my
          degree in Computer Engineering I wanted to get into the field and
          become a full-stack developer. I am enrolled in a Bootcamp at Carleton
          University. Throughtout the course, I have learned Javascript, CSS,
          HTML, jQuery, React.js, MYSQL, NOSQL, MongoDB, GraphQL. With that
          being said, I am fully a MERN stack developer.
        </AboutH2>
        <ProjectWrapper>
          <ProjectCard>
            <ProjectIcon src={Icon1}></ProjectIcon>
            <AboutH1>Full-Stack Developer</AboutH1>
          </ProjectCard>
          <ProjectCard>
            <ProjectIcon src={Icon2}></ProjectIcon>
            <AboutH1>
              C, C++, C#, Java, JavaScript, HTML/CSS, SQL, MYSQL, React.js,
              Node.js, GraphQL, MongoDB{' '}
            </AboutH1>
          </ProjectCard>
          <ProjectCard>
            <ProjectIcon src={Icon3}></ProjectIcon>
            <AboutH1>
              Knowledge: Data-Structure, Interfacing, Software Design/Testing,
              Network Programming, Unix/Linux, embedded programming, real-time,
              loT, MQTT Cloud, Circuit logic design, UI web application
            </AboutH1>
          </ProjectCard>
        </ProjectWrapper>
      </Container>
    </>
  );
}
