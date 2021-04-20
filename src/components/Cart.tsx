import React, { Component } from 'react'
import styles from './Cart.module.css'
import { FiShoppingCart } from 'react-icons/fi'
import { AppStateContext } from '../contexts/AppContext'

interface Props {}

interface State {
  isOpen: boolean
}

class Cart extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      isOpen: false,
    }
  }

  handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }))
  }

  render() {
    return (
      <AppStateContext.Consumer>
        {state => {
          return (
            <div className={styles.cartContainer}>
              <button className={styles.button} type="button" onClick={this.handleClick}>
                <FiShoppingCart />
                {state.cart.items.length} pizzas
              </button>
              <div
                className={styles.cartDropDown}
                style={{
                  display: this.state.isOpen && state.cart.items.length ? 'block' : 'none',
                }}>
                <ul>
                  {state.cart.items.map(item => (
                    <li key={item.id}>
                      {item.name} - {item.quantity}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )
        }}
      </AppStateContext.Consumer>
    )
  }
}

export default Cart
