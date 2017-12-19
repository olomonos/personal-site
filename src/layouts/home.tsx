import * as React from 'react';
import { MainCard } from '../components/main-card';
import { Projects } from '../components/projects';
import { Footer } from '../components/footer';

export const Home: React.StatelessComponent = () => (
    <div className="home">
        <MainCard />
        <Projects />
        <Footer />
    </div>
);
