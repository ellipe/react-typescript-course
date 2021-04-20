import React from 'react'
import { Pizza } from '../@types/types'
import withAddToCart, { addToCartProps } from '../lib/withAddToCart'

interface Props extends addToCartProps {
  pizza: Pizza
}

const SpecialOffer: React.FC<Props> = ({ pizza, AddToCart }) => {
  const handleAddToCart = () => {
    AddToCart({
      id: pizza.id,
      name: pizza.name,
      price: pizza.price,
    })
  }
  return (
    <div>
      <h2>{pizza.name}</h2>
      <p>{pizza.description}</p>
      <p>{pizza.price}</p>
      <button type="button" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  )
}

export default withAddToCart(SpecialOffer)
