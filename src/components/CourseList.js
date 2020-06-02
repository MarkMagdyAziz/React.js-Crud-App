import React, { Component } from 'react';

// fulstate component

 


class CourseList extends Component {
    state = {
        isEdit: false
    }
    // render course item
    renderCourse = () => {
    //  get the props from 'this' ( course list).details.name
    //                  , thenshow the name in <li> 
    return (
           <li>
            <span>{this.props.details.name}</span> <span>  ...  </span>
            <button onClick={() => {this.toggleState()}}>Edit Course</button>
                <button onClick={ () => {this.props.deleteCourse(this.props.index)}}>Delete Course</button>
           </li>
        )
    }
    // toggle state 
    toggleState = () => {
        let { isEdit } = this.state
        this.setState({
            isEdit: !isEdit
        })
    }
    updateCourseItem = (e) => {
        e.preventDefault();
        this.props.editCourse(this.props.index ,this.input.value )
        this.toggleState();
    }
    // render update from
    renderUpdateForm = () => {
        return (
            <form onSubmit={this.updateCourseItem}>
                <input type="text" ref={(v)=> {this.input = v}} defaultValue={this.props.details.name} /> 
                <button>Update Course</button>
            </form>
        )
    }



    render() {
        let isEdit = this.state.isEdit
        return (
            <React.Fragment>
                
                {isEdit ? this.renderUpdateForm() : this.renderCourse()}
                
            </React.Fragment>
        );
    }
}
export default CourseList;