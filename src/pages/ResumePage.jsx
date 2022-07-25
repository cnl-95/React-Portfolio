import React from 'react';
import Resume from '../components/Resume/Resume';
import AboutMe from '../assets/images/svg/about-me.svg';
import TechSkill from '../assets/images/svg/technical-skills.svg';
import Exp from '../assets/images/svg/experiences.svg';
import Work from '../assets/images/svg/work.svg';
import School from '../assets/images/svg/school.svg';
import Projects from '../assets/images/svg/projects.svg';

const data = [
  {
    id: 1,
    heading: 'About Me',
    icon: AboutMe,
    description:
      'I am an outgoing, social, charismatic and funny person who enjoy being physically active. I enjoy play soccer, volleyball, beach volleyball, football and exercising at the local gym.\nIn the summertime I enjoy camping and fishing.\nI have a diverse knowledge and experiences in programing from various languages.\nI enjoy manipulating data and developing hardware, real-time applications, and web applications. I have written application in Java, JavaScript, C, C++, C#. I am a Full-Stack MERN Developer. I have excellent work ethics and I enjoy solving problems. I can work in a team environment and independently',
  },
  {
    id: 2,
    heading: 'Technical Skills',
    icon: TechSkill,
    description:
      'Technical Skills: C/C++, Java, OOP, Data Structure, Process Architecture, Interfacing, Software Design and Testing, SQL, MYSQL, PostgresSQL, Angular, CSS, HTML, RESTful APIs, JavaScript, Network Programming, Unix/Linux, Web Enterprise, .NET, embedded programming, real-time, loT, MQTT Cloud, Circuit logic design, UI web application',
  },
  {
    id: 3,
    heading: 'Experiences',
    icon: Exp,
    description:
      'Knowledge in Java/C/C++/OOP design patterns, data structure and algorithm\nExperiences in developing web apps, Full-Stack Mern Developer\nRESTFul API/JavaScript/Graphql\n/MySQL/NOSQL/React/MongoDB, GIT version control\nDeveloped and understand of embedded platforms, RT application, multi-processor, RT program in C running on Linux OS/QNX, compile in C\nUnderstanding of networking and the different layer protocols\nBusiness Intelligence and Data Analytics',
  },
  {
    id: 4,
    heading: 'Work',
    icon: Work,
    description: [
      '🏢 SE Health Care - Nursing Coordination - July 11, 2016 – Current',
      '🖥️ Health Canada - Data Migration - Jun 9, 2014 – Feb 19, 2016',
      '🧑‍💼Statistic Canada - Stats Clerk - Jun 29, 2011 – Nov 8, 2011',
    ],
  },
  {
    id: 5,
    heading: 'Education',
    icon: School,
    description:
      'Ontario College Advanced Diploma - Algonquin College - Computer Engineering Technology (Computer Science) April 2021',
  },
  {
    id: 6,
    heading: 'Projects',
    icon: Projects,
    description:
      'Developed compiler in C, programmed Real-Time application, Developed circuit board; 8 segment display, RGB LED, temp sensor dashboard, temp restful and MQTT Cloud, Designed, developed, and tested web application for client project using Angular Framework in JavaScript ',
  },
];

export default function ResumePage() {
  return <Resume data={data} />;
}
