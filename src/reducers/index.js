import { combineReducers } from 'redux';
import myReducer1 from './tasks'
import myReducer2 from './changeForm';
import myReducer3 from './editting';

//noi tap hop cac reducer

const myReducer =  combineReducers({
    task : myReducer1, // tasks : tasks
    isDisplayForm : myReducer2,
    editting : myReducer3
})



export default myReducer