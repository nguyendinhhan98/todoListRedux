import * as types from './../constants/ActionTypes'

var initialState = {}
var myReducer3 = (state = initialState, action) => {
    switch(action.type){
        case types.EDIT :
            console.log(action);
            
            return action.task
            
        default : 
            return state    
    }   
}

export default myReducer3