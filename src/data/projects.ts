import { ProjectCard } from '../store/types';

export const PROJECTS: ProjectCard[] = [
    {
        projectName: 'Matching Game',
        projectDescription: 'Rules: \n You should find the odd circle in the right' 
            + ' part of the field. Time is limited. If you can\'t find the odd circle' 
            + ' in time, the game is over.',
        githubLink: 'https://github.com/olomonos/matching-game/',
        githubPageLink: 'https://olomonos.github.io/matching-game/',
        isTryIt: true,
        color: 'color-2'
    },
    {
        projectName: 'Grammarly Front End Challenge',
        projectDescription: 'In the building, the lift can go to any apartment.' 
            + ' Find the optimal path for the lift, taking into account that the time' 
            + ' needed to pass through an apartment varies.',
        githubLink: 'https://github.com/olomonos/grammarly-front-end-challenge/',
        githubPageLink: 'https://olomonos.github.io/grammarly-front-end-challenge/',
        isTryIt: true,
        color: 'color-3'
    },
    {
        projectName: 'Percolation App',
        projectDescription: 'This project is the first assignment from the Coursera course "Algorithms, Part I".',
        githubLink: 'https://github.com/olomonos/percolation-app/',
        githubPageLink: 'https://olomonos.github.io/percolation-app/',
        isTryIt: true,
        color: 'color-2'
    },
    {
        projectName: 'Personal Site',
        projectDescription: 'It\'s this site.',
        githubLink: 'https://github.com/olomonos/personal-site/',
        githubPageLink: '',
        isTryIt: false,
        color: 'color-4'
    }
];
