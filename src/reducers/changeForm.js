import * as types from './../constants/ActionTypes'

var initialState = false; // default close form
var myReducer2 = (state = initialState, action) => {
    switch(action.type){
        case types.TOGGLE_FORM :
            return !state
        case types.DISPLAY_FORM : 
            return true
        case types.CLOSE_FORM :
            return false      
            
        default :
        return state    
    }   
}

export default myReducer2