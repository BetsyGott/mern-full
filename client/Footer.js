import React, {Component} from 'react';
import FilterLink from '../container/FilterLink'

const Footer = ()=> (
    <p>
        Show: (" ")
        <FilterLink filter="SHOW_ALL">All</FilterLink>
        Show: (", ")
        <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>
        Show: (", ")
        <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
    </p>
);

export default Footer
