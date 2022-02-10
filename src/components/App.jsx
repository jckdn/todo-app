import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import HomePage from './home/HomePage';
// import AboutPage from './about/AboutPage';
// import Header from './common/Header';
// import PageNotFound from './PageNotFound';
// import CoursesPage from './courses/CoursesPage';
import ToDoList from './ToDoList';

function App() {
  return (
    // TODO: Container fluid?
    <div className="container-fluid">
      <h2>To Do List</h2>
      <ToDoList />
    </div>
  );
}

export default App;
