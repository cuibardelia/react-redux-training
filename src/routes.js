import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from "./components/course/CoursesPage";
import ManageCoursePage from "./components/course/ManageCoursePage";

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="about" component={AboutPage} />
    <Route path="course" component={ManageCoursePage} />
    <Route path="course/:id" component={ManageCoursePage} />
    <Route path="courses" component={CoursesPage} />
  </Route>
);
// the App component will always be loaded - by placing it at the top in the route tag
//if somebody's going to '/' we'll show the home page
