// -----INITIAL STORE /Global state-----//
// an object of initial state 

const INITIAL_STATE = {
    app_name: "Chatapp"
}

// arrow function taking parameter as initial state and
//  saved it in default parameter state and returned state.

export default (state = INITIAL_STATE, action) =>{
    console.log("action",action)
    switch (action.type) {
        case "SET_DATA":
            return ({
                ...state,
                app_name: action.data
            })
    }
return state;
}
// whatevr we will pass from dispatch we will get in data