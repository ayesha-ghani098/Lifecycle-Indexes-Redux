

const set_data = (data) => {
  return(dispatch) => {
    // using this  dispatch we will update data
    dispatch({type: "SET_DATA", data: data })
  }
}
export {
    set_data
}