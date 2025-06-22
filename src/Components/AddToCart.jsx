import React, { useContext } from 'react';
import ValueContext from '../Context/ValueContext';

const AddToCart = ({ product }) => {
  const { addItemToCart } = useContext(ValueContext);

  const handleClick = () => {
    addItemToCart(product);
  };

  return (
    <>
      <button 
        type='button' 
        onClick={handleClick} 
        style={{
          backgroundColor:'#007bff',
          color:'white',
          border:'none',
          padding:'12px 30px',
          borderRadius:'25px',
          fontSize:'14px',
          fontWeight:'600',
          cursor:'pointer',
          boxShadow:'0 4px 15px rgba(0,123,255,0.3)',
          transition:'all 0.3s ease',
          display:'flex',
          alignItems:'center',
          justifyContent:'center',
          gap:'8px',
          width:'100%',
          maxWidth:'200px'
        }}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = '#0056b3'
          e.target.style.transform = 'translateY(-2px)'
          e.target.style.boxShadow = '0 6px 20px rgba(0,123,255,0.4)'
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = '#007bff'
          e.target.style.transform = 'translateY(0)'
          e.target.style.boxShadow = '0 4px 15px rgba(0,123,255,0.3)'
        }}
      >
        🛒 ADD TO CART
      </button>
    </>
  );
};

export default AddToCart;