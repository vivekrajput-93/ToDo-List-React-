import React, { useState } from 'react';
import "../components/ToDoList.css";



// Hello Sir/Ma'am 

// This is a ToDo List using Reactjs.

// Here I made a main fucintion as ToDo list which exported so that we can import to App.js to render it.

const ToDoList = () => {

// AS you can see used useState() hook to create two variables tasks, newTask.


  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');


// I made the 3 functions "addTadk" , markTaskCompleted and removeTask .

// First - addTask , It is a constant arrow function which have 
// if statement which checks whether newTask value in not a empty string ,
//  here we call the setasks to update and create an new array from existing array[...tasks].
// appending to it and setting the task to newTask and it completed set false value.
// We call the setNewTask function to reset the newTask state by setting it to an empty string.

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { task: newTask, completed: false }]);
      setNewTask('');
    }
  };

  // Second Function markTaskCompleted function , it is constant state arrow function where it uses index parameter 
  //  to mark as completed task and updatedTasks[index].completed = true; -
  // We access the task object at the specified index in the updatedTasks 
  // array and set its completed property to true. This marks the task as completed.

  const markTaskCompleted = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = true;
    setTasks(updatedTasks);
  };

  // Third Function markTaskCompleted function , it is constant state arrow function where  just like markTaskCompleted function  
  // it uses  index parameter to remove the task.
  // We use the splice method on the updatedTasks array to remove one element at the specified index. 
  // his modifies the updatedTasks array in-place, removing the task at the specified index.
  // just like in the markTaskCompleted function We call the setTasks function, passing in the updatedTasks array as the new value for the tasks state. 
  //This updates the tasks state with the modified task array

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className='container'>
      <h1><span>ToDo</span> List</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter a new task"
      />
      <button className='add' onClick={addTask}>Add Task</button>

      <div className='para'>
        
      <p>Total Tasks: {tasks.length}</p>
      <p>Completed Tasks: {tasks.filter((task) => task.completed).length}</p>
      </div>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className='task'
              style={{
                 textDecorationColor : "white" , textDecoration: task.completed ? 'line-through'  : 'none',
              }}
            >
              {task.task}
            </span>
            <button className='mark' onClick={() => markTaskCompleted(index)}>Mark Completed</button>
            <button className='remove' onClick={() => removeTask(index)}>Remove</button>
          </li>
          
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
