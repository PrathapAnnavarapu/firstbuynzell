

 const AddAction = (type, value) => async dispatch =>{
    dispatch({
        type:type,
        payload: value
    })
}
export default AddAction


