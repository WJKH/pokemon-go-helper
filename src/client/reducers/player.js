import * as types from '../action_creators.js';

const initialState = {};

function player(state = initialState, action) {
	switch (action.type) {
		case types.LOAD:
			return action.player;
        	default: // default return on unknown action type
			return state;
	}
}

export default player;
