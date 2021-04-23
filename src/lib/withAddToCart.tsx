import React from 'react'
import { useDispatch, CartItem } from '../contexts/AppContext'

export interface addToCartProps {
  AddToCart: (item: Omit<CartItem, 'quantity'>) => void
}

interface Props extends addToCartProps {}

function withAddToCartHOC<Props>(ChildComponent: React.ComponentType<Props>) {
  const addToCartHOC = (props: Omit<Props, keyof addToCartProps>) => {
    const dispatch = useDispatch()
    const AddToCart = (item: CartItem) => {
      dispatch({
        type: 'ADD_TO_CART',
        payload: {
          item,
        },
      })
    }
    return <ChildComponent {...(props as Props)} AddToCart={AddToCart} />
  }

  return addToCartHOC
}

export default withAddToCartHOC

export const withAddToCartProps: React.FC<{ children: (props: Omit<Props, keyof addToCartProps>) => JSX.Element }> = ({
  children,
}) => {
  const dispatch = useDispatch()
  const AddToCart = (item: CartItem) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        item,
      },
    })
  }
  return children({ AddToCart })
}

// hooks
interface CartItemWithOutQuantyty extends Omit<CartItem, 'quantity'> {}

export const useAddToCart = () => {
  const dispatch = useDispatch()
  const AddToCart = (item: CartItemWithOutQuantyty) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        item,
      },
    })
  }

  return AddToCart
}
