import React from 'react'

import pizzas from '../data/pizzas.json'
import Pizza from './Pizza'
import styles from './App.module.css'

const App = () => {
  return <div className={styles.container}>
    <h1 className={styles.header}>Pizza World!</h1>
    <ul className={styles.pizzaList}>
      {pizzas.map((pizza) => <Pizza key={pizza.id} pizza={pizza}/>)}
    </ul>
  </div>
}

export default App