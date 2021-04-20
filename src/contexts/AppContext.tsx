import React, { createContext, useContext, useReducer } from 'react'

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
}

interface AppStateValue {
  cart: {
    items: CartItem[]
  }
}

const defaultStateValue: AppStateValue = {
  cart: {
    items: [],
  },
}

// Context

export const AppStateContext = createContext(defaultStateValue)
export const AppDispatchContext = createContext<React.Dispatch<AddToCartAction> | undefined>(undefined)

const AppStateProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultStateValue)

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>{children}</AppDispatchContext.Provider>
    </AppStateContext.Provider>
  )
}

export default AppStateProvider

// Hooks
export const useDispatch = () => {
  const dispatch = useContext(AppDispatchContext)
  if (!dispatch) {
    throw new Error('useDispatch must be used within AppDispatchContext.Provider')
  }
  return dispatch
}

// Reducer
interface Action<T> {
  type: T
}

interface AddToCartAction extends Action<'ADD_TO_CART'> {
  payload: {
    item: Omit<CartItem, 'quantity'>
  }
}

const reducer = (state: AppStateValue, action: AddToCartAction) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const itemToAdd = action.payload.item
      const itemExits = state.cart.items.find(item => item.id === itemToAdd.id)
      return {
        ...state,
        cart: {
          ...state.cart,
          items: itemExits
            ? state.cart.items.map(item => {
                if (item.id === itemToAdd.id) {
                  return {
                    ...item,
                    quantity: item.quantity + 1,
                  }
                }
                return item
              })
            : [...state.cart.items, { ...itemToAdd, quantity: 1 }],
        },
      }
    default:
      return state
  }
}
