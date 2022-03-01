export const UserTypeReducer = (state,action)=>{

    switch (action.type) {
        case action.value:
            return action.value
        default:
            return state
    }
}