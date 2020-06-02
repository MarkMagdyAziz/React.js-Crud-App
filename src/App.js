import React, { Component } from 'react';
import CourseForm from './components/CourseForm';
import CourseList from './components/CourseList';

class App extends Component {
  state = {
    courses: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JQuery"}, 
    ],
    current: ''
  }
  // update course
  updateCourse = (e) => {
    this.setState({
      // current = the value from input
      current: e.target.value
    })
    //console.log(e.target.value)
  }
  // create course 
  addCourse = (e) => {
    e.preventDefault();
    let current = this.state.current;
    let courses = this.state.courses;
    courses.push({ name: current })
    this.setState({
      courses ,
      current: ''
    })
    //console.log("added course")
  }
  // deleteCourse
  deleteCourse = (index) => {
    let courses = this.state.courses;
    courses.splice(index, 1)
    this.setState({
      courses
    })

  }

  // edit courses 
  editCourse = (index, value) => {
    let courses = this.state.courses;
    let course = courses[index];
    course['name'] = value;
    this.state({
      courses
    })
  }
  render() {
    // get the courses from this state
    const { courses } = this.state;
    // loop on the courses
    const courseList = courses.map((course, index) => {
      // show the course list and pass details as props
      // special key to each item
      return <CourseList details={course} key={index} index={index} update={this.handleChange} deleteCourse={this.deleteCourse} editCourse={this.editCourse}/>
    })
  return (
    <section className="App">

      <h2>Add Course</h2>
      <CourseForm current={this.state.current} updateCourse = {this.updateCourse} addCourse={this.addCourse} />
      <ul>{courseList}</ul>
      
    </section>
  );
}
  }

export default App;
