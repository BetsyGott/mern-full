import React, {Component} from 'react';
import Todolist from './ToDoList';
import Footer from './Footer';
import AddTodo from '../container/AddTodo';
import VisibleTodoList from '../container/VisibleTodoList';

const Demo = () => (
    <div>
        <AddTodo/>
        <VisibleTodoList/>
        <Footer/>
    </div>
);

export default Demo
