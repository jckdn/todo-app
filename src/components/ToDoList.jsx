import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getItems, createItem } from '../redux/actions/item-actions';
import PropTypes from 'prop-types';

function ToDoList(props) {
  const [course, setCourse] = useState({ title: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    props.createItem(course);
  };

  const handleChange = (event) => {
    const newCourse = { ...course, title: event.target.value };

    setCourse(newCourse);
  };
  return (
    <>
      <h3>Add Course</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={course.title}></input>
        <input type="submit" value="Save"></input>
      </form>
      {props.items.map((item) => (
        <div key={item.title}>{item.title}</div>
      ))}
    </>
  );
}

ToDoList.propTypes = {
  items: PropTypes.array,
  getItems: PropTypes.func.isRequired,
  createItem: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    items: state.items,
  };
}

const actionCreators = {
  getItems,
  createItem,
};

export default connect(mapStateToProps, actionCreators)(ToDoList);
