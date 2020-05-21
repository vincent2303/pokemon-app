import React from 'react'
import Pokemon from './components/Pokemon'
import './App.css'

function App() {

  const pokemonIds = Array.from(Array(10).keys())
  pokemonIds.shift()

  return (
    <div id="pokemonApp">
      <h1 id="appTitle" >Pokemon App</h1>
      { pokemonIds.map(id=><Pokemon key={id} pokemonId={id} />) }
    </div>
  );
}

export default App
