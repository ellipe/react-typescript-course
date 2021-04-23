import React, { Component, createRef } from 'react'
import styles from './Cart.module.css'
import { FiShoppingCart } from 'react-icons/fi'
import { AppStateContext } from '../contexts/AppContext'

interface Props {}

interface State {
  isOpen: boolean
}

class Cart extends Component<Props, State> {
  #containerRef: React.RefObject<HTMLDivElement>

  constructor(props: Props) {
    super(props)
    this.state = {
      isOpen: false,
    }
    this.#containerRef = createRef()
  }

  listener = (e: MouseEvent) => {
    if (this.#containerRef.current && !this.#containerRef.current.contains(e.target as Node)) {
      this.setState({ isOpen: false })
    }
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.listener)
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.listener)
  }

  handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }))
  }

  render() {
    return (
      <AppStateContext.Consumer>
        {state => {
          return (
            <div className={styles.cartContainer} ref={this.#containerRef}>
              <button className={styles.button} type="button" onClick={this.handleClick}>
                <FiShoppingCart />
                {state.cart.items.reduce((total, item) => item.quantity + total, 0)} pizzas
              </button>
              <div
                className={styles.cartDropDown}
                style={{
                  display: this.state.isOpen && state.cart.items.length ? 'block' : 'none',
                }}>
                <ul>
                  {state.cart.items.map(item => (
                    <li key={item.id}>
                      {item.name} x {item.quantity}
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
