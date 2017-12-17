import * as React from 'react';
import { NAME, EMAIL, GITHUB } from '../data/main-card';

export const MainCard: React.StatelessComponent = () => {
    return (
        <div className="card-panel main-card">
            <h2>{NAME}</h2>
            <a href="https://github.com/olomonos/">{GITHUB}</a>
            <h6>{EMAIL}</h6>
        </div>
    );
};
