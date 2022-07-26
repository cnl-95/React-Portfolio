import React, { useState } from 'react';
import {
  ProjectContainer,
  ProjectWrapper,
  ProjectCard,
  ProjectH1,
  ProjectH2,
  ProjectIcon,
} from './ProjectCards.style';
import goJoe from '../../assets/images/projects/goJoe.png';
import codeQuiz from '../../assets/images/projects/codeQuiz.png';
import workPlanner from '../../assets/images/projects/workPlanner.png';
import budgetTracker from '../../assets/images/projects/budgetTracker.png';
import pennyThoughts from '../../assets/images/projects/pennyThoughts.png';

export default function ProjectCards() {
  const [projects] = useState([
    {
      id: 1,
      title: 'Go Joe',
      link: 'https://cnl-95.github.io/GoJoe/',
      image: goJoe,
    },
    {
      id: 2,
      title: 'Code Quiz',
      link: 'https://cnl-95.github.io/JS-Code-Quiz/',
      image: codeQuiz,
    },
    {
      id: 3,
      title: 'Work Day Planner',
      link: 'https://cnl-95.github.io/Work-Day-Scheduler/',
      image: workPlanner,
    },
    {
      id: 4,
      title: 'Budget Tracker',
      link: 'https://github.com/cnl-95/budget-tracker',
      image: budgetTracker,
    },
    {
      id: 5,
      title: 'Penny For Your Thoughts',
      link: 'https://penny-thoughts.herokuapp.com//',
      image: pennyThoughts,
    },

    {
      id: 5,
      title: 'Penny For Your Thoughts',
      link: 'https://penny-thoughts.herokuapp.com//',
      image: pennyThoughts,
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
