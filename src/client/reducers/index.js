import { combineReducers } from 'redux';
import app from './app';
import player from './player';
import pokedex from './pokedex';
import pokemon from './pokemon';
import proto from './proto';
import recommendation from './recommendation';

export const rootReducer = combineReducers({
	app,
	player,
	pokedex,
	pokemon,
	proto,
	recommendation
});	
