import { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import { nanoid }  from 'nanoid';
import './index.css';

const FILTER_MAP = { 
  All: () => true,
  Active: task => !task.completed,
  Completed: task => task.completed
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function Form(props) {
  // console.log('Form loaded!')

  const [name, setName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) {
      return;
    }
    props.addTask(name);
    setName("");
  }

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>

      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

function FilterButton(props) { // props
  // console.log('Filter loaded!');

  return (
    <button
      type="button"
      className="btn toggle-btn"
      aria-pressed={props.isPressed}
      onClick={() => props.setFilter(props.name)} // setFilter()
    >
      <span className="visually-hidden">Show </span>
      <span>{props.name}</span>
      <span className="visually-hidden"> tasks</span>
    </button>
  );
}

function Todo(props) {
  console.log('Todo loaded!', props.id);
  
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState('');

  const editFieldRef = useRef(null);
  const editButtonRef = useRef();
  
  const wasEditing = useRef(null);
  
  console.log(wasEditing);

  useEffect(() => {
    if (isEditing) {
      editFieldRef.current.focus()
    }
    // wasEditing.current !== null && wasEditing.current === true
    if (!isEditing && wasEditing.current) {
      editButtonRef.current.focus()
    }
    wasEditing.current = isEditing;
  })

  function handleChange(e) {
    setNewName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!newName) {
      return;
    }
    
    props.editTask(props.id, newName.trim()) 
    setNewName("");
    setEditing(false);
  }

  const editingTemplate = (
    <form className="stack-small" onSubmit={handleSubmit}>

      <div className="form-group">
        <label className="todo-label" htmlFor={props.id}>
          New name for {props.name}
        </label>
        <input
          id={props.id}
          className="todo-text"
          type="text"
          value={newName || props.name}
          onChange={handleChange}
          ref={editFieldRef}
        />
      </div>

      <div className="btn-group">
        <button
          type="button"
          className="btn todo-cancel"
          onClick={() => {
            setEditing(false);
            setNewName("");
          }}
        >
          Cancel
          <span className="visually-hidden">renaming {props.name}</span>
        </button>
        <button type="submit" className="btn btn__primary todo-edit">
          Save
          <span className="visually-hidden">new name for {props.name}</span>
        </button>
      </div>

    </form>
  );

  const viewTemplate = (
    <div className="stack-small">
      <div className="c-cb">
          <input
            id={props.id}
            type="checkbox"
            defaultChecked={props.completed}
            onChange={() => props.toggleTaskCompleted(props.id)}
          />
          <label className="todo-label" htmlFor={props.id}>
            {props.name}
          </label>
      </div>
      <div className="btn-group">
        <button
          type="button"
          className="btn"
          onClick={() => setEditing(true)}
          ref={editButtonRef}
        >
          Edit <span className="visually-hidden">{props.name}</span>
        </button>
        <button
          type="button"
          className="btn btn__danger"
          onClick={() => props.deleteTask(props.id)}
        >
          Delete <span className="visually-hidden">{props.name}</span>
        </button>
      </div>
    </div>
  );

  return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;
}

function App(props) {
  console.log('App loaded!');

  const [tasks, setTasks] = useState(props.tasks);
  const [filter, setFilter] = useState('All');

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map(task => {
      if (id === task.id) {
        return {...task, completed: !task.completed} 
      }
      return task;
    });

    setTasks(updatedTasks); 
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter(task => id !== task.id);
    setTasks(remainingTasks);
  }

  function editTask(id, newName) {
    const editedTaskList = tasks.map(task => {
      if (id === task.id) {
        return {...task, name: newName} 
      }
      return task;
    });
    setTasks(editedTaskList); 
  }

  function addTask(name) {
    const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
    setTasks([...tasks, newTask]);
  }

  const filterList = FILTER_NAMES.map(name => (
    <FilterButton
      key={name}
      name={name} 
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  const taskList = tasks
  .filter(FILTER_MAP[filter]) 
  .map(task => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
      editTask={editTask}
    />
  ));

  const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
  const headingText = `${taskList.length} ${tasksNoun} remaining`;

  const listHeadingRef = useRef();

  const prevTaskLength = useRef(null);

  console.log(taskList.length)
  console.log(prevTaskLength);
  
  if (tasks.length - prevTaskLength.current === -1) {
    listHeadingRef.current.focus()
  }

  useEffect(() => {
    prevTaskLength.current = tasks.length;
  })

  
  return (
    <div className="todoapp stack-large">
      <Form addTask={addTask} />

      <div className="filters btn-group stack-exception">
        {filterList}
      </div>
      
      <h2 id="list-heading" tabIndex="-1" ref={listHeadingRef}>
        {headingText}
      </h2>
      
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}

const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false }
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App tasks={DATA}/>);
