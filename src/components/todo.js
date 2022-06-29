import React from 'react'
import '../App.css'
import Button from '@mui/material/Button';
import PropTypes from 'prop-types'

function Todo({name, hours, onClick}){
        return(
        <div className='list' id="displayedList">
        <h4>{name}</h4>
        <h4>{hours}</h4>
        <Button onClick={onClick} variant="contained" id="deleteTaskId" name={name}>Delete</Button>
        </div>
        )
    };

export default Todo;

Todo.propTypes = {
    name : PropTypes.string.isRequired,
    hours: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
}