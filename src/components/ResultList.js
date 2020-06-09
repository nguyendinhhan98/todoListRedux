import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from './../actions/index'

class ResultList extends Component {
    
   

    onUpdateResultList = () => {
        
        console.log(this.props.tasks);
        
        this.props.onUpdateStatus(this.props.tasks.id)
    }

    onDelete = () => {
        this.props.onDeleteTask(this.props.tasks.id)
    }

    onEditTask = () => {
        
        this.props.onOpenForm()
        this.props.onEditTask(this.props.tasks )
        
    }

    render() {
        const {tasks,index} = this.props
        return (
                <tr>
                    <td key={index}>{index + 1}</td>
                    <td>{tasks.name}</td>                                                              
                    <td className="text_center">
                        <span className={tasks.status === 
                                        true ? 'label label-danger center c text_center w50' : 'label label-success center c text_center w50'}
                                        onClick={this.onUpdateResultList}
                                        >{tasks.status === true ? 'Kích hoạt' : 'Ẩn'}</span>
                    </td>
                    <td> 
                        <div className="center">
                            <button type="button"
                                    className="btn btn-primary c mr-1"
                                    onClick={this.onEditTask}
                                    >Sửa</button>
                            <button type="button" 
                                    className="btn btn-danger c ml-1"
                                    onClick={this.onDelete}
                                    >Xóa</button>
                        </div>
                    </td>
                </tr>
            
        );
    }
}
const mapStateToProps = (state) => {
    return {
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onUpdateStatus: (id) => {
            dispatch(actions.updateStatus(id))
        },
        onDeleteTask: (id) => {
            dispatch(actions.deleteTask(id))
        },
        onOpenForm: () => {
            dispatch(actions.displayForm())
        },
        onEditTask: (task) => {
            dispatch(actions.editItem(task))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ResultList);