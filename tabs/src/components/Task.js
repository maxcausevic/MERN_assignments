import React from 'react';

const Task = (props) => {
    const { task, setList} = props;
        const onClick = () =>{
        //     setList()
        }
    return (
        <div className="container bg-secondary">
            <h4>{task.name}</h4>
            <div className="container">
            <label htmlForm="checkbox">Completed?</label>
            <input type="checkbox" name=""/>
            <button onClick={onClick} className="btn btn-sm btn-danger">X</button>
            </div>
        </div>
    )
}

export default Task;