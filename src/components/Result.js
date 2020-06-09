import React, { Component } from 'react';
import ResultList from './ResultList';

//conect
import { connect } from 'react-redux';

class Result extends Component {
    render() {
    
        
        const {dulieu} = this.props 
        const element = dulieu.map((task,index) => {
            return <ResultList 
                    key={task.id} 
                    index={index} 
                    tasks={task}
                    />
        })
        return (
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th className="text_center">STT</th>
                        <th className="text_center">Tên</th>
                        <th className="text_center">Trạng Thái</th>
                        <th className="text_center">Hành Động</th>
                    </tr>
                </thead>
                <tbody>
                    {element}
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = (state) => {  //mapStateToProps : lay nhung thu yeu cau trong thung chua nhung o biet vi tri
    
    
    return {
        dulieu : state.task
    }
}

export default connect(mapStateToProps, null)(Result);  // connect :tim duoc vi tri cua thung chua 
                                                        //roi truyen vao mapStateToProps