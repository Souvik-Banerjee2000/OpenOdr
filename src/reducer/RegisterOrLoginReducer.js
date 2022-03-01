export const RegisterOrLoginReducer = (state,action)=>{

    switch (action.type) {
        case action.value:
            return action.value
        default:
            return state
    }
}