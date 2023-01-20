import {useState} from 'react'

const initialBeers = [
  {id: "b1", name: "Heineken", available: true},
  {id: "b2", name: "Guinness", available: false},
  {id: "b3", name: "Kloud", available: true}
];

const FILTER_MAP = {
  All: () => true,
  Available: (beer) => beer.available,
  Unavailable: (beer) => !beer.available
}

const FILTER_NAMES = Object.keys(FILTER_MAP);

export default function App() {

  const [beers, setBeers] = useState(initialBeers);
  const [filter, setFilter] = useState('All');
  
  console.log(beers);

  function addBeer(name) {
    const newBeer = {id: Math.random(), name, available: true};

    const updatedBeers = [...beers, newBeer];
    setBeers(updatedBeers);
  }

  function editBeer(beerId) {
    const editedBeers = beers.map(beer => {
      if (beer.id===beerId) {
        return {...beer, available: !beer.available}
      }
      return beer;
    })

    setBeers(editedBeers);
  }

  function deleteBeer(beerId) {
    const updatedBeers = beers.filter(beer => {
      if (beer.id!==beerId) {
        return beer;
      }
    })

    setBeers(updatedBeers);
  }

  const filterButtons = FILTER_NAMES.map(name => (
    <FilterButton 
      key={name}
      name={name} 
      setFilter={setFilter}
    />  
  ))

  const beerList = beers.filter(FILTER_MAP[filter]).map(beer => (
    <Beer 
      key={beer.id} 
      beer={beer} 
      editBeer={editBeer}
      deleteBeer={deleteBeer}
    /> 
  ))

  return (
    <>
      <h1>Beers</h1>
      <Form addBeer={addBeer} />
      {filterButtons}
      <ul>
        {beerList}
      </ul>
    </>
  )
}

function Form({addBeer}) {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    addBeer(name);
    setName("");
  }

  function handleChange(e) {
    const name = e.target.value;
    setName(name);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Guinness"
        onChange={handleChange}
        value={name}
      />
      <button
        type="submit"
        disabled={!name}
      >
        Add
      </button>
    </form>  
  )
}

function FilterButton({name, setFilter}) {

  return (
    <button onClick={() => setFilter(name)}>
      {name}
    </button>
  )
}

function Beer({beer, editBeer, deleteBeer}) {
  return (
    <li>
      {beer.name} 
      <div>
        <button onClick={() => deleteBeer(beer.id)}>
          Delete
        </button>
        <button onClick={() => editBeer(beer.id)}>
          {beer.available ? "Available" : "Unavailable"}
        </button>
      </div>
    </li>   
  )
}