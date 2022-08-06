import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Form
function Form(props) {

  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim()) {
      return;
    }

    props.addTask(name)
    setName("");
  }

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit} className="mb-2">
      <h2 className="text-center my-2">What needs to be done?</h2>
      <input
        className="w-full mb-2"
        type="text" 
        value={name} 
        onChange={handleChange} 
      />
      <button className="btn btn-secondary w-full ">Add</button>
    </form>
  )
}

// FilterButton
function FilterButton(props) {
  return (
    <button 
      className="btn btn-light" 
      onClick={() => props.setFilter(props.name)}
    >
      {props.name}
    </button>
  )
}

// Todo
function Todo(props) {

  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState("");
  const wasEditing = useRef(null);
  const editFieldRef = useRef(null);
  const editButtonRef = useRef(null);

  useEffect(() => {
    if(isEditing) {
      editFieldRef.current.focus();
    }
    if (!isEditing && wasEditing.current) {
      editButtonRef.current.focus()
    }
    wasEditing.current = isEditing;
  })

  function handleSubmit(e) {
    e.preventDefault();

    if (!newName) {
      return;
    }

    props.editTask(props.id, newName.trim())
    setNewName("")
    setEditing(false);
  }

  function handleChange(e) {
    setNewName(e.target.value);
  }

  const viewTemplate = (
    <>
      <div className="flex items-center" style={{ height: "75px" }}>
        <input 
          type="checkbox" 
          defaultChecked={props.completed} 
          onChange={() => props.toggleTaskCompleted(props.id)} 
        />
        <label for="" className="ml-2">
          {props.name}
        </label>
      </div>

      <div className="flex flex-equal">       
        <button 
          className="btn btn-light"
          onClick={() => setEditing(true)}
          ref={editButtonRef}
        >
          Edit</button>
        <button 
          className="btn btn-danger" 
          onClick={() => props.deleteTask(props.id)}
        >Delete</button>
      </div>
    </>
  )

  const editingTemplate = (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center" style={{ height: "75px" }}>
        <div className="w-full">
          <label htmlFor="">New name for {props.name}</label>
          <input 
            className="w-full"
            type="text" 
            value={newName || props.name} 
            onChange={handleChange} 
            ref={editFieldRef}
          />  
        </div>
      </div>
      <div className="flex flex-equal">
        <button 
          className="btn btn-light" 
          type="button" 
          onClick={() => {
            setEditing(false);
            setNewName("");
          }}
        >Cancel</button>
        <button 
          className="btn btn-secondary"
          type="submit" 
        >Save</button>
      </div>
    </form>
  )

  return <li className="">{isEditing ? editingTemplate : viewTemplate}</li>
}

const FILTER_MAP = {
  All: () => true,
  Active: task => !task.completed,
  Completed: task => task.completed
}

const FILTER_NAMES = Object.keys(FILTER_MAP);

// App
function App(props) {

  const [tasks, setTasks] = useState(props.tasks);
  const [filter, setFilter] = useState('All');

  const filterList = FILTER_NAMES.map(name => {
    return (
      <FilterButton 
        key={name} 
        name={name} 
        setFilter={setFilter}
      />
    )
  })
  
  const taskList = tasks
  .filter(FILTER_MAP[filter])
  .map(task => (
    <Todo 
      id={task.id} 
      deleteTask={deleteTask} 
      completed={task.completed}
      key={task.id} 
      name={task.name} 
      toggleTaskCompleted={toggleTaskCompleted}
      editTask={editTask}
    />
  ))

  function addTask(name) {
    const newTask = { id: "todo-" + Math.random(), name: name, completed: false };
    setTasks([...tasks, newTask]);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter(task => id !== task.id)
    setTasks(remainingTasks)
  }

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map(task => {
      if (id === task.id) {
        return {...task, completed: !task.completed}
      }
      return task;
    })

    setTasks(updatedTasks);
  }

  function editTask(id, newName) {
    const editedTaskList = tasks.map(task => {
      if (task.id === id) {
        return {...task, name: newName }
      }
      return task;
    })
    setTasks(editedTaskList);
  }

  const headingText = `${taskList.length} task(s) remaining`;
  const listHeadingRef = useRef();

  const prevTaskLength = useRef(null);

  useEffect(() => {
    if (tasks.length - prevTaskLength.current === -1) {
      listHeadingRef.current.focus()
    }
    prevTaskLength.current = tasks.length;
  })

  return (
    <div className="px-2">
      <Form addTask={addTask} />
      <div className="flex flex-equal mb-2">
        {filterList}
      </div>
      <h2 tabIndex="-1" ref={listHeadingRef} className="">
        {headingText}
      </h2>
      <ul className="">
        {taskList}
      </ul>
    </div>
  )
}

const DATA = [
  { id: 'todo-0', name: 'Eat', completed: true },
  { id: 'todo-1', name: 'Sleep', completed: false },
  { id: 'todo-2', name: 'Repeat', completed: false },
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App tasks={DATA} />);