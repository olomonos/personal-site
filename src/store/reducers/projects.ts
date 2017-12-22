import { Reducer } from './reducer';
import { Store } from '../types';
import { PROJECTS } from '../../data/projects';

// const projectData: ProjectData[] = PROJECTS;
// let initialProjects: Store['projects'] = [];
// for (let i = 0; i < projectData.length; i++) {
//     const projectCard: ProjectCard = {...projectData[i], ...{color: ''}};
//     initialProjects.push(projectCard);
// }

const initialProjects: Store['projects'] = PROJECTS;

export const projects: Reducer<Store['projects']> = (
    state = initialProjects, action
) => {
    switch (action.type) {
        // case 'SetTimes': {
        //     return action.times;
        // }
        default: {
            return state;
        }
    }
};

// id-s !!
