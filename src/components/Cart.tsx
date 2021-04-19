import React, { Component } from 'react'
import styles from './Cart.module.css'
import { FiShoppingCart } from 'react-icons/fi'

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

  render() {
    return (
      <div className={styles.cartContainer}>
        <button
          className={styles.button}
          type="button"
          onClick={() => {
            this.setState(prevState => ({ isOpen: !prevState.isOpen }))
          }}>
          <FiShoppingCart />2 pizzas
        </button>
        <div
          className={styles.cartDropDown}
          style={{
            display: this.state.isOpen ? 'block' : 'none',
          }}>
          <ul>
            <li>Napolitana</li>
            <li>Marianara</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Cart
