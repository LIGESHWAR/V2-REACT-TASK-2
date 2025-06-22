import React from 'react'
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MyContext from './Context/MyContext'
import Template from './Components/Template'

const App = () => {
    const[data,setdata]=useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then((res)=>res.json())
        .then((data)=>{
            setdata(data)
        console.log(data)})
    },[])
  return (
    <>
      <MyContext.Provider value={{data}}>
        <Router>
          <Template/>
        </Router>
      </MyContext.Provider>
    </>
  )
}

export default App