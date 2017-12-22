import * as React from 'react';
import Header from '../containers/header';
import Projects from '../containers/projects';
import { Footer } from '../components/footer';

export const Home: React.StatelessComponent = () => (
    <div className="home">
        <Header />
        <Projects />
        <Footer />
    </div>
);
