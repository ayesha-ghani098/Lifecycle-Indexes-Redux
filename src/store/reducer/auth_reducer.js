// -----INITIAL STORE /Global state-----//
// an object of initial state 

const INITIAL_STATE = {
    username: "AyeshaGhani",
    email: "abc@gmail.com"
}

// arrow function taking parameter as initial state and
//  saved it in default parameter state and returned state.

export default (state = INITIAL_STATE) =>{
return state;
}