import * as React from 'react';
import { MainCard } from '../components/main-card';
import { Projects } from '../components/projects';
import { Footer } from '../components/footer';

export const Home: React.StatelessComponent = () => (
    <div className="home">
        <div className="main-container">
            <MainCard />
            <Projects />
        </div>
        <Footer />
    </div>
);
