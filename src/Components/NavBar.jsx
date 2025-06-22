import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import ValueContext from '../Context/ValueContext'
import SearchBar from './SearchBar'

const NavBar = () => {
    const { Value } = useContext(ValueContext)
    
    return (
       <>
       <div className="wrapper" style={{
         display:'flex',
         justifyContent:'space-around',
         alignItems:'center',
         backgroundColor:'#fff',
         boxShadow:'0 2px 10px rgba(0,0,0,0.1)',
         padding:'10px 20px',
         borderBottom:'1px solid #e0e0e0'
       }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div className="logo" style={{
            display:'flex',
            alignItems:'center',
            gap:'10px'
          }}>
            <div style={{
              width:'50px',
              height:'50px',
              backgroundColor:'#007bff',
              borderRadius:'50%',
              display:'flex',
              alignItems:'center',
              justifyContent:'center',
              fontSize:'24px',
              fontWeight:'bold',
              color:'white',
              boxShadow:'0 4px 12px rgba(0,123,255,0.3)'
            }}>
              🛍️
            </div>
            <div style={{
              fontSize:'24px',
              fontWeight:'800',
              color:'#2c3e50',
              letterSpacing:'-1px'
            }}>
              ShopEase
            </div>
          </div>
        </Link>
        <div className="searchbar">
            <SearchBar/>
        </div>
        <div className="cart">
            <Link 
              to="/cart"
              style={{
                backgroundColor:'#007bff',
                color:'white',
                border:'none',
                padding:'12px 24px',
                borderRadius:'25px',
                fontSize:'16px',
                fontWeight:'600',
                cursor:'pointer',
                boxShadow:'0 4px 12px rgba(0,123,255,0.3)',
                transition:'all 0.3s ease',
                display:'flex',
                alignItems:'center',
                gap:'8px',
                textDecoration:'none'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#0056b3'
                e.target.style.transform = 'translateY(-2px)'
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = '#007bff'
                e.target.style.transform = 'translateY(0)'
              }}
            >
                🛒 CART ({Value})
            </Link>
        </div>
       </div>
       </>
    )
}

export default NavBar
