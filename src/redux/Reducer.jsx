let initialState = {
    data : [],
}

let Reducer = (state = initialState, action)=>{
    switch (action.type) {
        case "STORE":
              return {data:action.payload};
    
        default:
            return state;
    }
}

export default Reducer;
