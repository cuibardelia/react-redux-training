import React, {PropTypes} from "react";
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import {bindActionCreators} from "redux";
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind();
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  redirectToAddCoursePage(){
    browserHistory.push('/course');
  }

  render() {
    const {courses} =  this.props;
    return (
      <div>
        <h1>Courses</h1>
        <input type="submit"
        value="Add Course"
        className="bun btn-primary"
        onClick={this.redirectToAddCoursePage} />
        <CourseList courses={courses} />
      </div>
    );
  }
}

//validation
CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
} //state - the state within our redux store (the property is defined in the reducer)

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect (mapStateToProps, mapDispatchToProps)(CoursesPage); //two function calls; the first returns a function which will be called with the component as param
