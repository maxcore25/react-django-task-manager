import { useState } from 'react';
import './App.css';

function App() {
  const tasks = [
    {
      id: 1,
      title: 'Go for shopping',
      description: 'Buy new sport clothes',
      completed: false,
    },
    {
      id: 2,
      title: 'Go for shopping2',
      description: 'Buy new sport clothes',
      completed: false,
    },
    {
      id: 3,
      title: 'Go for shopping3',
      description: 'Buy new sport clothes',
      completed: false,
    },
    {
      id: 4,
      title: 'Go for shopping4',
      description: 'Buy new sport clothes',
      completed: false,
    },
  ];

  const [taskList, setTaskList] = useState(tasks);

  return (
    <div className='App'>
      <div className='my-5'>
        <span></span>
      </div>
    </div>
  );
}

export default App;
