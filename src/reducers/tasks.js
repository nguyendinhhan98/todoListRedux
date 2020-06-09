import * as types from './../constants/ActionTypes'

//khoi tao state
var data = JSON.parse(localStorage.getItem('tasks'))
var inittalState = data ? data : [];

//
var randomId = () => {
    return '_' + Math.random().toString(36).substr(2, 9); 
}
//
// var findId = (id) => {
        
//     const {tasks} = this.state
//     let result = -1
//     tasks.forEach((i,index) => {
        
//         if(i.id === id){
//             result = index
//         }
//     })
//     return result
    
// }

//cac reducer la cac pure function nen no ko truc tiep thay doi state ma tao ra cac ban sao
var myReducer1 = (state = inittalState, action) => {   // (state, action) => (new state)
    var id = ''
    var index = -1
    switch(action.type){
        case types.LIST_ALL :
            return state

        case types.SAVE_TASK :
            console.log(action);
            
            var task = {
                id : action.task.id,
                name : action.task.name,
                status : action.task.status === 'true' ? true : false
            }
            
            
            if(task.id){
                
                index = state.findIndex(i => i.id === id)
                state[index] = task
            }else{
                task.id = randomId()
                state.push(task)
            }
            localStorage.setItem('tasks',JSON.stringify(state))
            return [...state]
        
        case types.UPDATE_STATUS :
            id = action.id
            index = state.findIndex(i => i.id === id)
            
            
            state[index] = {
                ...state[index],
                status : !state[index].status
            }
        
            localStorage.setItem('tasks',JSON.stringify(state))
            return [...state]   
            
        case types.DELETE :
            id = action.id
            index = state.findIndex(i => i.id === id)    
            state.splice(index,1)
            localStorage.setItem('tasks',JSON.stringify(state)) 
            return [...state]
            

        default :
            return state    
    }

}

export default myReducer1;