import React from 'react'

import pizzas from '../data/pizzas.json'
import Pizza from './Pizza'

const App = () => {
  return <div>
    <h1>Pizza World!</h1>
    <ul>
      {pizzas.map((pizza) => <Pizza key={pizza.id} pizza={pizza}/>)}
    </ul>
  </div>
}

export default App