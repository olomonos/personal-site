import * as React from 'react';
import { Project } from '../store/types';

export type Props = {
    projectName: Project['projectName'],
    projectDescription: Project['projectDescription'],
    githubLink: Project['githubLink'],
    githubPageLink: Project['githubPageLink'],
} & React.HTMLAttributes<HTMLDivElement>;

export const ProjectTab: React.StatelessComponent<Props> = ({
    projectName,
    projectDescription,
    githubLink,
    githubPageLink,
    ...rest
}) => {
    return (
        <div className="card small project-tab">
            <div className={'div-img ' + rest.className} />
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
