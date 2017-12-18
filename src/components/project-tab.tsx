import * as React from 'react';
import { Project } from '../store/types';
// import fox from '../data/fox-200-150.jpg';

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
        // <div className="project-tab">

            <div className={'card small sticky-action project-tab ' + rest['data-grid-class']}>
            {/* <div className="card small sticky-action"> */}
                <div className="card-image waves-effect waves-block waves-light">
                    {/* <img className="activator" src={fox} /> */}
                    <div 
                        className={'activator div-img ' + rest.className}
                    />
                </div>
                <div className="card-content">
                    <span className="card-title activator">
                        {projectName}
                        <i className="material-icons right">more_vert</i>
                    </span>
                    {/* <p><a href="#">This is a link</a></p> */}
                </div>
                <div className="card-reveal">
                    <span className="card-title">
                        {projectName}
                        <i className="material-icons right">close</i>
                    </span>
                    <p>
                        {projectDescription}
                    </p>
                </div>
                <div className="card-action">
                    <a href={githubLink}>Github</a>
                    <a href={githubPageLink}>Github Page</a>
                </div>
            </div>

        // </div>
    );
};
