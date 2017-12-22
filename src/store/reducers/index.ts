import { combineReducers } from 'redux';
import { Store } from '../types';
import { Reducer } from './reducer';
import { projects } from './projects';
import { contact } from './contact';

export default combineReducers({
    projects,
    contact
}) as Reducer<Store>;
