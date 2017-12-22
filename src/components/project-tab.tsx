import * as React from 'react';
import { ProjectCard } from '../store/types';

export type Props = {
    projectName: ProjectCard['projectName'],
    projectDescription: ProjectCard['projectDescription'],
    githubLink: ProjectCard['githubLink'],
    githubPageLink: ProjectCard['githubPageLink'],
    isTryIt: ProjectCard['isTryIt'],
    color: ProjectCard['color']
}; // & React.HTMLAttributes<HTMLDivElement>;

export const ProjectTab: React.StatelessComponent<Props> = ({
    projectName,
    projectDescription,
    githubLink,
    githubPageLink,
    isTryIt,
    color
    // ...rest
}) => {
    return (
        <div className="card small project-tab">
            <div className={'div-img ' + color} />
            <div className="card-content">
                <div className="card-name">
                    <span className="card-title">
                        {projectName} 
                    </span>
                </div>
                <p>
                    {projectDescription}
                </p>
            </div>
            <div className="card-action">
                <a href={githubLink}>Github</a>
                {projectName !== 'Personal Site' ?
                <a href={githubPageLink}>Try It</a> :
                null}
            </div>
        </div>
    );
};
