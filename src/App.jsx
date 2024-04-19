import { useState } from 'react';
import Form from './components/Form/Form';
import Tasks from './components/Tasks/Tasks';
import { Divider } from '@react-md/divider';

function App () {
  const [ tasks, setTasks ] = useState( [] );

  // Function to add a new task to the tasks list
  const addTask = ( newTask ) => {
    setTasks( prevTasks => [ ...prevTasks, newTask ] );
  };

  // Function to edit a task in the tasks list
  const editTask = ( editedTask ) => {
    setTasks( prevTasks => prevTasks.map( task => {
      if ( task.id === editedTask.id )
      {
        return editedTask;
      }
      return task;
    } ) );
  };

  // Function to delete a task from the tasks list
  const deleteTask = ( taskId ) => {
    setTasks( prevTasks => prevTasks.filter( task => task.id !== taskId ) );
  };

  return (
    <div className='container'>
      <Form addTask={ addTask } />
      <Divider />
      <Tasks
        tasks={ tasks }
        editTask={ editTask }
        deleteTask={ deleteTask }
      />
    </div>
  );
}

export default App;
