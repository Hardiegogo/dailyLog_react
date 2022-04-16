
export const notesReducer=(state,action)=>{
    switch(action.type){
        case "SET_NOTES":
            return {
                ...state,
                notes:action.payload
            }
        case "ADD_NOTE":
            return {
                ...state,
                notes:action.payload
            }
            
        default:
            return state
    }
}