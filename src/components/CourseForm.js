import React from 'react';

//stateless component

const CourseForm = (props) => {
    return (
        <form onSubmit={props.addCourse}>
            <input type="text" value={props.current} onChange={props.updateCourse}/>
            <button type="submit">Add Course</button>
            
        </form>
    )
}
export default CourseForm;