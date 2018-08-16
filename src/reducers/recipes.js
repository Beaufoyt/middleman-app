import types from '../constants/actionTypes';

import newState from '../helpers/newState';

const defaultState = {
    searchResults: 0,
    areLoading: false,
    error: null,
};

export default function recipes(state = defaultState, action) {
    switch (action.type) {
    case types.RECIPE_SUCCESS: {
        return newState(state, { searchResults: action.result, areLoading: false, error: null });
    }

    case types.RECIPES_ARE_LOADING: {
        return newState(state, { areLoading: true });
    }

    default:
        return state;
    }
}
