import { Reducer } from './reducer';
import { Store } from '../types';
import { NAME, EMAIL, GITHUB } from '../../data/contact';

const initialContact: Store['contact'] = {
    name: NAME,
    email: EMAIL,
    github: GITHUB
};

export const contact: Reducer<Store['contact']> = (
    state = initialContact, action
) => {
    switch (action.type) {
        default: {
            return state;
        }
    }
};
