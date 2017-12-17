import * as React from 'react';
import { NAME, EMAIL, GITHUB } from '../data/main-card';

export const MainCard: React.StatelessComponent = () => {
    return (
        <div className="card-panel">
            <h2 className="main-card-text">{NAME}</h2>
            <a className="main-card-text" href="https://github.com/olomonos/">{GITHUB}</a>
            <h6 className="main-card-text">{EMAIL}</h6>
        </div>
    );
};
