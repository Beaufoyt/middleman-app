import { globalLoader } from './ui';
import types from '../constants/actionTypes';

const recipeSuccess = result => ({ type: types.RECIPE_SUCCESS, result });
const recipesAreLoading = () => ({ type: types.RECIPES_ARE_LOADING });

export function searchRecipes(globalLoaderEnabled = false) {
    return (dispatch) => {
        dispatch(recipesAreLoading());

        console.log(globalLoaderEnabled);
        if (globalLoaderEnabled) {
            dispatch(globalLoader(true));
        }

        setTimeout(() => {
            dispatch(recipeSuccess(Math.floor(Math.random() * 10) + 1));

            if (globalLoaderEnabled) {
                dispatch(globalLoader(false));
            }
        }, 1000);
    };
}
