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
          Hi, my name is Christian Lafferty. After a life long love of computers and with some basic knowledge of HTML and CSS, I deciding to pursue the interest in Web Development. I'm currently enrolled in a Full Stack bootcamp through Vanderbilt University. Through the course, I've learned CSS, JavaScript, jQuery, React.js, MYSQL, NOSQL, MongoDB, GraphQL, and Node.js. 
        </AboutH2>
        <ProjectWrapper>
          <ProjectCard>
            
            <AboutH1>Full-Stack Developer</AboutH1>
          </ProjectCard>
          <ProjectCard>
            
            <AboutH1>
              C, C++, C#, Java, JavaScript, HTML/CSS, SQL, MYSQL, React.js,
              Node.js, GraphQL, MongoDB{' '}
            </AboutH1>
          </ProjectCard>
          <ProjectCard>
            
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
