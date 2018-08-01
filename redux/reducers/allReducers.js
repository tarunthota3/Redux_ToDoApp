import CardReducers from './cardReducers.js';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    card:CardReducers
});

export default allReducers;
