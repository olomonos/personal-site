import { combineReducers } from 'redux';
import { Store } from '../types';
import { Reducer } from './reducer';
import { lang } from './lang';

export default combineReducers({
    lang
}) as Reducer<Store>;
