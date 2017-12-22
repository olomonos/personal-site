import * as React from 'react';
import { Store, ProjectCard } from '../store/types';
import { ProjectTab } from '../components/project-tab';

export type Props = {
    projects: Store['projects']
};

export const Projects: React.StatelessComponent<Props> = ({projects}) => {

    const projectCards = projects.map((project: ProjectCard, i: number) => {
        return (
            <ProjectTab
                key={i}
                projectName={project.projectName}
                projectDescription={project.projectDescription}
                githubLink={project.githubLink}
                githubPageLink={project.githubPageLink}
                isTryIt={project.isTryIt}
                color={project.color}    
            />
        );
    });

    return (
        <div className="projects">
            {projectCards}
        </div>
    );
};
