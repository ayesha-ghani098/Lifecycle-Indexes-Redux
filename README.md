# REDUX

## REDUX

### What is redux and why it is used for?


Redux is one of the hottest libraries in front-end development these days.
 However, many people are confused about what it is and what its benefits are.
As the documentation states, Redux is a predictable state container for
 JavaScript apps. To rephrase that, it’s an application data-flow architecture, 
 rather than a traditional library or a framework like Underscore.js and AngularJS.

 ### Command to install react and react-redux

 npm i react-redux redux 
 ## or
 npm i react-redux
 npm i redux


# Provider
### React Redux provides <Provider />, which makes the Redux store available to the rest of your app:

import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import store from './store'

import App from './App'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)

# connect()
### React Redux provides a connect function for you to connect your component to the store.

import { connect } from 'react-redux'
import { increment, decrement, reset } from './actionCreators'

// const Counter = ...

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = { increment, decrement, reset }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
 

 ## To Do Functional Work like api calling or firebase database  import middleware which will get from redux-thunk

 ### npm i redux-thunk
