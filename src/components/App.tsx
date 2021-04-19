import React from 'react'

import pizzas from '../data/pizzas.json'
import Pizza from './Pizza'
import styles from './App.module.css'
import PizzaSVG from '../../assets/images/pizza.svg'

const App = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.siteTitle}>Pizza World!</h1>
        <PizzaSVG width={120} height={120} />
      </div>
      <ul className={styles.pizzaList}>
        {pizzas.map(pizza => (
          <Pizza key={pizza.id} pizza={pizza} />
        ))}
      </ul>
    </div>
  )
}

export default App
