// -----INITIAL STORE /Global state-----//
// an object of initial state 

// const INITIAL_STATE = {
//     name: "Ayesha Ghani Chippa"
// }

// arrow function taking parameter as initial state and
//  saved it in default parameter state and returned state.

// export default (state = INITIAL_STATE) =>{
// return state;
// }


// Combine multiple reducers here

import { combineReducers } from 'redux';
import auth_reducer from './auth_reducer';
import app_reducer from './app_reducer';

export default combineReducers({
    auth: auth_reducer,
    app: app_reducer
})

