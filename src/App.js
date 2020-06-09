import './App.css';
import React, { Component } from 'react';
import TaskForm from './components/TaskForm';
import SearchSort from './components/SearchSort'
import Result from './components/Result';
import * as actions from './actions/index'
import { connect } from 'react-redux';


class App extends Component {
    constructor(props) {
        super(props);
        this.state={

        }
    }
    onClose = () => {
        this.setState({
            isDisplayForm : !this.state.isDisplayForm
        })
        
    }  
  render() {
    const { isDisplayForm } = this.props
    
    const eleTabForm = isDisplayForm ? <TaskForm /> : ''
    return (
        <div className="container">
            <div>
                <h1 className="text_center">Quản Lý Công Việc</h1>
                <hr />
            </div>
            <div className="row">
                <div className={isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ''}>
                    {eleTabForm}
                </div>
                <div className={isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
                    <div>
                        <button 
                        type="button" 
                        className="btn btn-primary"
                        onClick = {this.props.onToggleForm}
                        >Thêm Công Việc</button>
                    </div>
                    <SearchSort />
                    <div className="mt-15">
                    <Result />
                    </div>
                </div>
            </div>
        </div>
    );
  }
}
const mapStateToProps = (state) => {
    console.log("aaaaaaaaaaaaaaa",state.isDisplayForm);
    
    return {
         isDisplayForm  : state.isDisplayForm
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onToggleForm: () => {
            dispatch(actions.toggleForm())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);


