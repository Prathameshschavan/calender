export default function myAction (dispatch,data){
   return dispatch({
        type:"STORE",
        payload: data
    })
}