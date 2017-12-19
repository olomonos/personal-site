import * as React from 'react';
import { ProjectTab } from '../components/project-tab';
import { PROJECT_1, PROJECT_2, PROJECT_3, PROJECT_4 } from '../data/projects';

export const Projects: React.StatelessComponent = () => {
    return (
        <div className="projects">
            <ProjectTab
                projectName={PROJECT_1.projectName}
                projectDescription={PROJECT_1.projectDescription}
                githubLink={PROJECT_1.githubLink}
                githubPageLink={PROJECT_1.githubPageLink}
            />
            <ProjectTab
                projectName={PROJECT_2.projectName}
                projectDescription={PROJECT_2.projectDescription}
                githubLink={PROJECT_2.githubLink}
                githubPageLink={PROJECT_2.githubPageLink}
            />
            <ProjectTab
                projectName={PROJECT_3.projectName}
                projectDescription={PROJECT_3.projectDescription}
                githubLink={PROJECT_3.githubLink}
                githubPageLink={PROJECT_3.githubPageLink}
            />
            <ProjectTab
                projectName={PROJECT_4.projectName}
                projectDescription={PROJECT_4.projectDescription}
                githubLink={PROJECT_4.githubLink}
                githubPageLink={PROJECT_4.githubPageLink}
            />
    </div>
    );
};

// map for <ProjectTab /> ?