import * as React from 'react';
import { Store } from '../store/types';

export type Props = {
    contact: Store['contact']
};

export const Header: React.StatelessComponent<Props> = ({contact}) => {
    return (
        <div className="page-header">
            <span className="header-logo">{contact.name}</span>
            <div className="header-contacts">
                <a className="header-github" href={contact.github}>{contact.github}</a>
                <span className="header-email">{contact.email}</span>
            </div>
        </div>
    );
};
