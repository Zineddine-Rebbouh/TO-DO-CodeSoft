import React, { useState } from 'react';
import './Tasks.css';
import edit from '../../assets/edit.png';
import del from '../../assets/delete.png';

const Tasks = ( { tasks, editTask, deleteTask } ) => {
    const [ editingTaskId, setEditingTaskId ] = useState( null );
    const [ newTaskText, setNewTaskText ] = useState( '' );

    const handleEditTask = ( taskId ) => {
        setEditingTaskId( taskId );
        const taskToEdit = tasks.find( task => task.id === taskId );
        setNewTaskText( taskToEdit.task );
    };

    const handleDeleteTask = ( taskId ) => {
        deleteTask( taskId ); // Call the deleteTask function passed from the parent component
    };

    const handleTaskChange = ( event ) => {
        setNewTaskText( event.target.value );
    };

    const handleSaveEdit = ( taskId ) => {
        editTask( { id: taskId, task: newTaskText } ); // Call the editTask function passed from the parent component
        setEditingTaskId( null );
        setNewTaskText( '' );
    };

    const toggleTaskCompletion = ( taskId ) => {
        editTask( { id: taskId, task: tasks.find( task => task.id === taskId ).task, completed: !tasks.find( task => task.id === taskId ).completed } );
    };

    return (
        <div className='tasks'>
            <div className='tasks-content'>
                { tasks.map( task => (
                    <div key={ task.id } className='task'>
                        <div className='task-status'>
                            <input
                                type='checkbox'
                                className='task-checkbox'
                                id='checkbox'
                                checked={ task.completed }
                                onChange={ () => toggleTaskCompletion( task.id ) }
                            />
                            { editingTaskId === task.id ? (
                                <input
                                    type='text'
                                    value={ newTaskText }
                                    onChange={ handleTaskChange }
                                    autoFocus
                                />
                            ) : (
                                <p className={ `task-text${ task.completed ? ' completed' : '' }` }>
                                    { task.task }
                                </p>
                            ) }
                        </div>
                        <div className='task-buttons'>
                            { editingTaskId === task.id ? (
                                <button onClick={ () => handleSaveEdit( task.id ) } className='task-button-save'>
                                    Save
                                </button>
                            ) : (
                                <button onClick={ () => handleEditTask( task.id ) } className='task-button-edit'>
                                    <img src={ edit } alt="edit-img" />
                                </button>
                            ) }
                            <button onClick={ () => handleDeleteTask( task.id ) } className='task-button-delete'>
                                <img src={ del } alt="delete-img" />
                            </button>
                        </div>
                    </div>
                ) ) }
            </div>
        </div>
    );
};

export default Tasks;
