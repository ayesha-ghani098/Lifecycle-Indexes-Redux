import './App.css';
import React from 'react';
import { connect } from 'react-redux';
import { set_data } from './store/action'

class App extends React.Component{
  render(){
  return (
   <div className="App">
    <h1>Redux Data</h1>
  <h2>{this.props.app_name}</h2>
  <button onClick={()=> this.props.set_data("olx")}>Set Data</button>
   </div>
  );
}
}

// this function will provide redux state in this component

const mapStateToProps = (state) => ({
  // redux will place these properties in your prop
//  name : state.name
username: state.auth.username,
email: state.auth.email,
app_name: state.app.app_name
})

// for functions

const mapDispatchToProp = (dispatch) =>({
  // set_data: ()=> console.log("hello")
  // set_data: ()=> set_data()

  // to connect this function with redux
  set_data: (data)=> dispatch(set_data(data))
})

export default connect(mapStateToProps,mapDispatchToProp)(App);
