export type Store = {
    lang: string,
    projects: ProjectCard[],
    contact: Contact
};

// export type ProjectData = {
//     projectName: string,
//     projectDescription: string,
//     githubLink: string,
//     githubPageLink: string,
//     isTryIt: boolean
// };

export type ProjectCard = {
    projectName: string,
    projectDescription: string,
    githubLink: string,
    githubPageLink: string,
    isTryIt: boolean,
    color: string
};

export type Contact = {
    name: string,
    email: string,
    github: string
};
