

import Header from './Components/Header';
import Tasks from './Components/Tasks';
import { useState } from "react";
import AddTask from './AddTask';

function App() {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
    {
        id:1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2.30pm',
        reminder: true,
    },

    {
        id:2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1.30pm',
        reminder: true,
    },
    {
        id:3,
        text: 'Food Shoppng',
        day: 'Feb 5th at 2.30pm',
        reminder: false,
    }
]);

  // Show Task Adder

  const onClick =() => {
    setShowAddTask(!showAddTask);

  }
  


  //Add Tasks
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = {id, ...task};
    setTasks([...tasks, newTask])
  }

  //Delete tasks
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
    
  }

  //Toggle Reminder

  const toggleReminder = (id) => {
   setTasks(tasks.map(task => task.id === id ? {...task, reminder : !task.reminder} : task))
  }


  return (
    <div className="container">
      <Header onClick={onClick} showAddTask={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onToggle={toggleReminder} onDelete={deleteTask} /> : <div>No Tasks Available</div>}
    </div>
  );
}

export default App;
