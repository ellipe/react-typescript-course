import React, { useContext } from 'react'
import styles from './Pizza.module.css'
import { Pizza as PizzaType } from '../@types/types'
import withAddToCart, { addToCartProps } from '../lib/withAddToCart'

interface Props extends addToCartProps {
  pizza: PizzaType
}

const Pizza: React.FC<Props> = ({ pizza, AddToCart }) => {
  const handleAddToCart = () => {
    AddToCart({
      id: pizza.id,
      name: pizza.name,
      price: pizza.price,
    })
  }
  return (
    <li className={styles.container}>
      <h2>{pizza.name}</h2>
      <p>{pizza.description}</p>
      <p>{pizza.price}</p>
      <button type="button" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </li>
  )
}

export default withAddToCart(Pizza)
