import React from 'react'
import { useDispatch, CartItem } from '../contexts/AppContext'

export interface addToCartProps {
  AddToCart: (item: Omit<CartItem, 'quantity'>) => void
}

function withAddToCart<Props extends addToCartProps>(ChildComponent: React.ComponentType<Props>) {
  const addToCartHOC = (props: Omit<Props, keyof addToCartProps>) => {
    const dispatch = useDispatch()
    const handleAddToCart = (item: CartItem) => {
      dispatch({
        type: 'ADD_TO_CART',
        payload: {
          item,
        },
      })
    }
    return <ChildComponent {...(props as Props)} AddToCart={handleAddToCart} />
  }

  return addToCartHOC
}

export default withAddToCart
