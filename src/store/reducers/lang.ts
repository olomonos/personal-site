import { Reducer } from './reducer';
import { Store } from '../types';

export const lang: Reducer<Store['lang']> = (
    state = 'En', action
) => {
    switch (action.type) {
        // case 'SetTimes': {
        //     return action.times;
        // }
        default: {
            return state;
        }
    }
};
