import * as types from './../constants/ActionTypes'


//tao cac action chua type va thong tin cua action do
export const listAll = () => {
    return {
        type : types.LIST_ALL
    }
}

export const saveTask = (task) => {
    return {
        type : types.SAVE_TASK,
        task 
    }
}

export const displayForm = () => {
    return {
        type : types.DISPLAY_FORM
    }
}

export const toggleForm = () => {
    return {
        type : types.TOGGLE_FORM
    }
}

export const closeForm = () => {
    return {
        type : types.CLOSE_FORM
    }
}

export const updateStatus = (id) => {
    return {
        type : types.UPDATE_STATUS,
        id 
    }
}

export const deleteTask = (id) => {
    return {
        type : types.DELETE,
        id
    }
}

export const editItem = (tasks) => {
    return {
        type : types.EDIT,
        tasks
    }
}