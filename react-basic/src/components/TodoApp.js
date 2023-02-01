import {useState, useEffect, useRef} from 'react'

/*
  INSTRUCTIONS
  *** Before start, install and configure tailwindcss ***

  1 Declare Components 
  App, Form, FilterButton, Todo
  
  2 Build basic shape and list initial tasks.
  App, Todo

  3 To add todo
  App, Form

  4 To delete todo
  App, Todo
  
  5 To toggle todo status
  App, Todo

  6 To filter todos
  App, FilterButton

  7 To edit todo
  App, Todo
*/

const initialTasks = [
  {id: "todo-0", name: "Eat", completed: true},
  {id: "todo-1", name: "Sleep", completed: false},
  {id: "todo-2", name: "Repeat", completed: false}
];

const FILTER_MAP = {
  All: () => true,
  Done: (task) => task.completed,
  Active: (task) => !task.completed
}

const FILTER_NAMES = Object.keys(FILTER_MAP);

export default function App() {

  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState('All');
  
  console.log(tasks);

  function addTask(name) {
    const newTask = {id: `todo-${Math.random()}`, name, completed: false};

    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter(task => task.id !== id);

    setTasks(remainingTasks);
  }

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return {...task, completed: !task.completed}
      }
      return task;
    })

    setTasks(updatedTasks);
  }

  function editTask(id, newName) {
    const editedTasks = tasks.map(task => {
      if (task.id === id) {
        return {...task, name: newName}
      }
      return task;
    })

    setTasks(editedTasks);
  }

  const filterButtons = FILTER_NAMES.map(name => (
    <FilterButton 
      key={name}
      name={name}
      isPressed={filter === name} 
      setFilter={setFilter}
    />  
  ))

  const taskList = tasks.filter(FILTER_MAP[filter]).map(task => (
    <Todo
      key={task.id} 
      id={task.id} 
      name={task.name}
      completed={task.completed}
      deleteTask={deleteTask}
      toggleTaskCompleted={toggleTaskCompleted}
      editTask={editTask}
    /> 
  ))

  document
    .body
    .style
    .backgroundColor = '#f1f1f1';

  return (
    <div className="max-w-sm mx-auto mt-8 border p-4 bg-white">
      <h1 className="text-2xl text-center mb-4">Todo List &#128526; &#127928;</h1>
      <Form 
        addTask={addTask} 
      />
      <div className="flex flex-nowrap gap-1 mb-4">
        {filterButtons}
      </div>
      <h2 className="text-xl mb-4">{taskList.length} task(s) remaining</h2>
      <ul>
        {taskList}
      </ul>
    </div>
  )
}

function Form(props) {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    props.addTask(name);
    setName("");
  }

  return (
    <form 
      onSubmit={handleSubmit}
      className="mb-4"
    >
      <input
        type="text"
        className="border px-2 py-1 w-full mb-2"
        value={name}
        onChange={(e) => setName(e.target.value)}
        autoComplete="off"
      />
      <button
        type="submit"
        className="p-1 w-full border disabled:opacity-50 text-blue-500"
        disabled={!name.trim()}
      >
        Add
      </button>
    </form>  
  )
}

function FilterButton(props) {

  return (
    <button 
      className={"p-1 w-1/3 border " + (props.isPressed && "outline") }
      onClick={() => props.setFilter(props.name)}
    >
      {props.name}
    </button>
  )
}

function Todo(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState("");
  const inputEl = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    props.editTask(props.id, newName);
    setIsEditing(false)
    setNewName("")
  }

  useEffect(() => {
    if (isEditing) {
      inputEl.current.focus();
    }
  })

  const viewTemplate = (
    <>
      <div className="flex mb-2">
        <label>
          <input
            type="checkbox"
            className="peer hidden"
            checked={props.completed}
            onChange={() => props.toggleTaskCompleted(props.id)}
          />
          <span className="text-xl peer-checked:line-through">
            {props.name}
          </span>
        </label>
      </div>
      <div className="flex flex-nowrap gap-1">
        <button 
          className="w-1/2 p-1 border"
          onClick={() => setIsEditing(true)}
        >
          Edit
        </button>
        <button
           className="w-1/2 p-1 border text-red-500"
           onClick={() => props.deleteTask(props.id)}
          >
          Delete
        </button>
      </div>
    </>
  );

  const editingTemplate = (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="border px-2 py-1 w-full mb-2"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        ref={inputEl}
      />
      <div className="flex flex-nowrap gap-1">
        <button
          type="button"
          className="w-1/2 p-1 border"
          onClick={() => setIsEditing(false)}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="w-1/2 p-1 border disabled:opacity-50 text-blue-500"
          disabled={!newName.trim()}
        >
          Save
        </button>
      </div>
    </form>
  )

  return (
    <li className="mb-4">
      {isEditing ? editingTemplate : viewTemplate}
    </li>
  )
}