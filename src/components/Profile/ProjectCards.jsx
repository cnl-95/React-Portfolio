import React, { useState } from 'react';
import {
  ProjectContainer,
  ProjectWrapper,
  ProjectCard,
  ProjectH1,
  ProjectH2,
  ProjectIcon,
} from './ProjectCards.style';
import CodeQuiz from '../../assets/images/projects/code-quiz-challenge.png';
import WeatherDashboard from '../../assets/images/projects/weather-dashboard.png';
import NoteTaker from '../../assets/images/projects/note-taker.png';
import MoviesTv from '../../assets/images/projects/movies-tv-shows.png';
import QuoteSmith from '../../assets/images/projects/quotes-smith.png';

export default function ProjectCards() {
  const [projects] = useState([
    {
      id: 1,
      title: 'Password Generator',
      link: 'https://sophoanmeas.github.io/code-quiz/Develop/index.html',
      image: CodeQuiz,
    },
    {
      id: 2,
      title: 'Weather Dashboard',
      link: 'https://sophoanmeas.github.io/weather-dashboard/develop/index.html',
      image: WeatherDashboard,
    },
    {
      id: 3,
      title: 'Note Taker',
      link: 'https://note-taker-pon.herokuapp.com',
      image: NoteTaker,
    },
    {
      id: 4,
      title: 'Movies-Tv-Shows',
      link: 'https://sophoanmeas.github.io/movies-tv-shows/index.html',
      image: MoviesTv,
    },
    {
      id: 5,
      title: 'Quote-Smith',
      link: 'https://group2-quotesmith.herokuapp.com/',
      image: QuoteSmith,
    },
  ]);

  return (
    <div>
      <ProjectContainer id='projects'>
        <ProjectH1>My Projects</ProjectH1>
        <ProjectWrapper>
          {projects.map((items) => {
            return (
              <ProjectCard key={items.id}>
                <ProjectIcon src={items.image} alt="" />
                <a href={items.link} target='_blank' rel='noreferrer'>
                  <ProjectH2>{items.title}</ProjectH2>
                </a>
              </ProjectCard>
            );
          })}
        </ProjectWrapper>
      </ProjectContainer>
    </div>
  );
}
