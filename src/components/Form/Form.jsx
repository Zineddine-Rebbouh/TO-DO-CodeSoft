import React, { useState } from 'react'
import './Form.css'
const Form = ( { addTask } ) => {

    const [ formData, setFormData ] = useState( {
        task: ''
    } );

    const handleChange = ( event ) => {
        const { value } = event.target;
        setFormData( prevState => ( {
            ...prevState,
            task: value
        } ) );
    };

    const handleSubmit = ( e ) => {
        e.preventDefault();

        if ( !formData.task.trim() ) return; // Prevent adding empty tasks

        const newTask = {
            id: new Date().getTime().toString(),
            task: formData.task,
            isCompleted: false
        };

        addTask( newTask ); // Call the addTask function passed from the parent component to add the new task

        setFormData( {
            task: ''
        } );
    };


    return (
        <form
            className=''
            onSubmit={ handleSubmit }
        >
            <div className="wrapper">
                <h1 className='form-title'>YOUR TO-DO TRACKER IS HERE</h1>
                <div className='form-content'>
                    <input
                        type="text"
                        placeholder='Enter you task'
                        value={ formData.task }
                        onChange={ handleChange }
                        name="task"
                        id="task"
                        required />
                    <button type='submit' className='plus-button'>
                        +
                    </button>
                </div>
            </div>
        </form>
    )
}

export default Form
