import React from 'react'

import pizzas from '../data/pizzas.json'
import Pizza from './Pizza'
import Cart from './Cart'
import styles from './App.module.css'
import PizzaSVG from '../../assets/images/pizza.svg'
import AppStateProvider from '../contexts/AppContext'
import SpecialOffer from './SpecialOffer'

const App = () => {
  const specialPizzaOffer = pizzas.find(pizza => pizza.special_offer === true)
  return (
    <AppStateProvider>
      <div className={styles.container}>
        <div className={styles.header}>
          <PizzaSVG width={120} height={120} />
          <h1 className={styles.siteTitle}>Pizza World!</h1>
          <Cart />
        </div>
        {specialPizzaOffer && <SpecialOffer pizza={specialPizzaOffer} />}
        <ul className={styles.pizzaList}>
          {pizzas.map(pizza => (
            <Pizza key={pizza.id} pizza={pizza} />
          ))}
        </ul>
      </div>
    </AppStateProvider>
  )
}

export default App
