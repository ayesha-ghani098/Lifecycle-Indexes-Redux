// ----Configuration of store---//

// import reducer index.js
import reducer from './reducer';

// import createStore form redux znd applymiddleware is a method to apply middleware
import { createStore, applyMiddleware } from 'redux';


// import thunk
import thunk from 'redux-thunk';

// passed reducer(initial store) in createStore method which is imported from redux
const store = createStore(reducer,{}, applyMiddleware(thunk))

export default store;