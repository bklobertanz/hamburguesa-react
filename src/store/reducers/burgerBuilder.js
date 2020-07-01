import * as actionTypes from '../actions/actionTypes';

const initialState = {
    ingredients: {
        meat:0,
        cheese:0,
        salad:0,
        bacon:0
    },
    totalPrice: 0
}

const INGREDIENTS_PRICE = {

    meat:1.2,
    cheese:0.5,
    salad:0.3,
    bacon: 0.8
}

const ingredientReducer = (state = initialState, action) => {

    if(action.type === actionTypes.ADD_INGREDIENT){
        return{
            ...state, 
            ingredients:{
                ...state.ingredients,
                [action.ingredientName]: state.ingredients[action.ingredientName] + 1
            },
            totalPrice: state.totalPrice + INGREDIENTS_PRICE[action.ingredientName]
        }
    }
    if(action.type === actionTypes.REMOVE_INGREDIENT){
        return {
            ...state,
            ingredients: {
                ...state.ingredients,
                [action.ingredientName]: state.ingredients[action.ingredientName] - 1
            },
            totalPrice: state.totalPrice - INGREDIENTS_PRICE[action.ingredientName]

        }
    }
    return state;
}

export default ingredientReducer;