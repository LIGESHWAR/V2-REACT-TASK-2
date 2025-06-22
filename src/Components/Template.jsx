import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './NavBar'
import Cards from './Cards'
import CartDetails from './CartDetails'
import ValueContext from '../Context/ValueContext'
import ErrorPage from './ErrorPage'

const Template = () => {
    const [Value, setvalue] = useState(0)
    const [cartItems, setCartItems] = useState([])
    
    const addItemToCart = (product) => {
      const existingItemIndex = cartItems.findIndex(item => item.id === product.id)
      
      if (existingItemIndex !== -1) {
        
        alert("Item already added to the cart")
        return
      } else {
        
        setCartItems([...cartItems, { ...product, quantity: 1 }])
        setvalue(Value + 1)
      }
    }
    
    const removeItemFromCart = (index) => {
      const itemToRemove = cartItems[index]
      const newCartItems = [...cartItems]
      newCartItems.splice(index, 1)
      setCartItems(newCartItems)
      setvalue(Value - itemToRemove.quantity)
    }
    
    const increaseQuantity = (index) => {
      const updatedItems = [...cartItems]
      updatedItems[index].quantity += 1
      setCartItems(updatedItems)
      setvalue(Value + 1)
    }
    
    const decreaseQuantity = (index) => {
      const updatedItems = [...cartItems]
      if (updatedItems[index].quantity > 1) {
        updatedItems[index].quantity -= 1
        setCartItems(updatedItems)
        setvalue(Value - 1)
      }
    }
    
    return (
      <>
        <ValueContext.Provider value={{
          Value, 
          setvalue, 
          cartItems, 
          addItemToCart,
          removeItemFromCart,
          increaseQuantity,
          decreaseQuantity
        }}>
          <NavBar />
          <Routes>
            <Route path="/" element={<Cards />} />
            <Route path="/cart" element={<CartDetails />} />
            <Route path="*" element={<ErrorPage/>} />
          </Routes>
        </ValueContext.Provider>
      </>
    )
}

export default Template