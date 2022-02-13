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
  const [viewCompleted, setViewCompleted] = useState(false);

  return (
    <div className='App'>
      <main className='content'>
        <h1 className='text-black text-uppercase text-center my-4'>
          Task Manager
        </h1>
        <div className='row '>
          <div className='col-md-6 col-sm-10 mx-auto p-0'>
            <div className='card p-3'>
              <div className=''>
                <button onClick={this.createItem} className='btn btn-primary'>
                  Add task
                </button>
              </div>
              {this.renderTabList()}
              <ul className='list-group list-group-flush'>
                {taskList.filter(item => item.completed === viewCompleted)}
              </ul>
            </div>
          </div>
        </div>
        {this.state.modal ? (
          <div></div>
        ) : // <Modal
        //   activeItem={this.state.activeItem}
        //   toggle={this.toggle}
        //   onSave={this.handleSubmit}
        // />
        null}
      </main>
      {/* <div className='my-5 tab-list'>
        <span
          onClick={() => setViewCompleted(true)}
          className={viewCompleted ? 'active' : ''}>
          Completed
        </span>
        <span
          onClick={() => setViewCompleted(false)}
          className={viewCompleted ? '' : 'active'}>
          Uncompleted
        </span>
      </div> */}
    </div>
  );
}

export default App;
