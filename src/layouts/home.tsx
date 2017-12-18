import * as React from 'react';
import { MainCard } from '../components/main-card';
// import { Projects } from '../components/projects';
import { Footer } from '../components/footer';

import { ProjectTab } from '../components/project-tab';
import { PROJECT_1, PROJECT_2, PROJECT_3, PROJECT_4 } from '../data/projects';

export const Home: React.StatelessComponent = () => (
    <div className="home">
        <div className="main-container">
            <MainCard />
            {/* <Projects /> */}
            
            {/* <div className="div-img color-3" /> */}
            <ProjectTab
                projectName={PROJECT_1.projectName}
                projectDescription={PROJECT_1.projectDescription}
                githubLink={PROJECT_1.githubLink}
                githubPageLink={PROJECT_1.githubPageLink}
            />

            {/* <div className="div-img color-2 tall-div" /> */}
            <ProjectTab
                projectName={PROJECT_2.projectName}
                projectDescription={PROJECT_2.projectDescription}
                githubLink={PROJECT_2.githubLink}
                githubPageLink={PROJECT_2.githubPageLink}
            />

            {/* <div className="div-img color-5" /> */}
            <ProjectTab
                projectName={PROJECT_3.projectName}
                projectDescription={PROJECT_3.projectDescription}
                githubLink={PROJECT_3.githubLink}
                githubPageLink={PROJECT_3.githubPageLink}
            />

            {/* <div className="div-img color-3 tall-div" /> */}
            {/* <div className="div-img color-4" /> */}
            <ProjectTab
                projectName={PROJECT_4.projectName}
                projectDescription={PROJECT_4.projectDescription}
                githubLink={PROJECT_4.githubLink}
                githubPageLink={PROJECT_4.githubPageLink}
            />
            {/* <div className="div-img color-5" /> */}

        </div>
        <Footer />
    </div>
);
