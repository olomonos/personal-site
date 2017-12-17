import * as React from 'react';
import { MainCard } from '../components/main-card';
import { Footer } from '../components/footer';

export const Home: React.StatelessComponent = () => (
    <div className="home">
        <MainCard />
        <a className="waves-effect waves-light btn">button</a>
        <Footer />
    </div>
);
