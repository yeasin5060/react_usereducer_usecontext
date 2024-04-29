function reduce(state, action){
    switch (action.type) {
        case "add":
            return[
               ...state,{
                id : state.length+1,
                data:action.data
               }
            ];
        case "delete":
            let updateData = state.filter((value)=> value.id !== action.data )
            return state = updateData
        default:
            console.log("not case")
    }
}
export{
    reduce
}