import * as React from 'react';
import { NAME, EMAIL, GITHUB } from '../data/main-card';

export const MainCard: React.StatelessComponent = () => {
    return (
        <div className="page-header">
            <span className="header-logo">{NAME}</span>
            <div className="header-contacts">
                <a className="header-github" href={GITHUB}>{GITHUB}</a>
                <span className="header-email">{EMAIL}</span>
            </div>
        </div>
    );
};
