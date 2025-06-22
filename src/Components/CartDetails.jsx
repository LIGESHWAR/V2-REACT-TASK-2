import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ValueContext from '../Context/ValueContext';

const CartDetails = () => {
  const { Value, cartItems, removeItemFromCart, increaseQuantity, decreaseQuantity } = useContext(ValueContext);
  const navigate = useNavigate();
  
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discountedPrice = totalPrice * 0.9;
  
  return (
    <>
    <div className="wrapper" style={{
      backgroundColor:'#f8f9fa',
      minHeight:`${300 + cartItems.reduce((total, item) => total + (150 + (item.quantity - 1) * 20), 0) + cartItems.length * 40}px`,
      width:'1200px',
      margin:'20px auto',
      borderRadius:'15px',
      boxShadow:'0 8px 32px rgba(0,0,0,0.1)',
      border:'1px solid #e9ecef',
      overflow:'hidden'
    }}>
      <div style={{
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '25px 30px',
        backgroundColor:'#fff',
        borderBottom:'2px solid #e9ecef'
      }}>
        <h2 style={{
          color:'#2c3e50',
          fontSize:'28px',
          fontWeight:'700',
          margin:'0',
          display:'flex',
          alignItems:'center',
          gap:'10px'
        }}>🛍️ Shopping Cart ({Value} items)</h2>
        <button 
          onClick={() => navigate('/')}
          style={{
            backgroundColor: '#6c757d',
            color: 'white',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '25px',
            cursor: 'pointer',
            fontSize:'14px',
            fontWeight:'600',
            transition:'all 0.3s ease',
            boxShadow:'0 4px 12px rgba(108,117,125,0.3)'
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#5a6268'
            e.target.style.transform = 'translateY(-2px)'
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = '#6c757d'
            e.target.style.transform = 'translateY(0)'
          }}
        >
          ← Back to Shop
        </button>
      </div>
      {cartItems.length === 0 ? (
        <div style={{
          textAlign: 'center',
          padding: '60px 20px',
          color: '#6c757d'
        }}>
          <div style={{fontSize:'64px', marginBottom:'20px'}}>🛒</div>
          <h3 style={{color:'#495057', marginBottom:'10px'}}>Your cart is empty</h3>
          <p style={{color:'#6c757d'}}>Add some products to get started!</p>
        </div>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div key={item.id} className="cards" style={{
              display:'flex',
              backgroundColor:'#fff',
              border:'1px solid #e9ecef',
              borderRadius:'12px',
              height:`${150 + (item.quantity - 1) * 20}px`,
              width:'90%',
              margin:'15px auto',
              boxShadow:'0 4px 16px rgba(0,0,0,0.08)',
              transition:'all 0.3s ease',
              overflow:'hidden'
            }}>
              <div className="image" style={{
                padding:'20px',
                backgroundColor:'#f8f9fa',
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                minWidth:'140px'
              }}>
                <img src={item.image} alt={item.title} style={{
                  height: '100px', 
                  width: '100px', 
                  objectFit: 'contain',
                  borderRadius:'8px'
                }} />
              </div>
              <div className="info" style={{
                flex: 1,
                padding:'20px',
                display:'flex',
                flexDirection:'column',
                justifyContent:'space-between'
              }}>
                <div>
                  <div className="title" style={{
                    fontSize:'18px',
                    fontWeight:'600',
                    color:'#2c3e50',
                    marginBottom:'8px',
                    lineHeight:'1.4'
                  }}>
                    {item.title}
                  </div>
                  <div className="price" style={{
                    fontSize:'20px',
                    fontWeight:'700',
                    color:'#28a745',
                    marginBottom:'15px'
                  }}>
                    Rs:{item.price}
                  </div>
                </div>
                <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                  <div className="quantity" style={{
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '12px',
                    backgroundColor:'#f8f9fa',
                    padding:'8px 16px',
                    borderRadius:'25px',
                    border:'1px solid #e9ecef'
                  }}>
                    <button 
                      onClick={() => decreaseQuantity(index)}
                      style={{
                        backgroundColor: '#dc3545',
                        color:'white',
                        border: 'none',
                        padding: '6px 12px',
                        borderRadius: '50%',
                        cursor: 'pointer',
                        fontSize:'16px',
                        fontWeight:'bold',
                        width:'32px',
                        height:'32px',
                        display:'flex',
                        alignItems:'center',
                        justifyContent:'center'
                      }}
                    >
                      −
                    </button>
                    <span style={{
                      fontSize:'16px',
                      fontWeight:'600',
                      color:'#495057',
                      minWidth:'60px',
                      textAlign:'center'
                    }}>Qty: {item.quantity}</span>
                    <button 
                      onClick={() => increaseQuantity(index)}
                      style={{
                        backgroundColor: '#28a745',
                        color:'white',
                        border: 'none',
                        padding: '6px 12px',
                        borderRadius: '50%',
                        cursor: 'pointer',
                        fontSize:'16px',
                        fontWeight:'bold',
                        width:'32px',
                        height:'32px',
                        display:'flex',
                        alignItems:'center',
                        justifyContent:'center'
                      }}
                    >
                      +
                    </button>
                  </div>
                  <div className="total" style={{
                    fontSize:'18px',
                    fontWeight:'700',
                    color:'#2c3e50'
                  }}>
                    Total:{(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              </div>
              <div style={{
                display: 'flex', 
                alignItems: 'center', 
                padding: '20px',
                borderLeft:'1px solid #e9ecef'
              }}>
                <button 
                  onClick={() => removeItemFromCart(index)}
                  style={{
                    backgroundColor: '#dc3545',
                    color: 'white',
                    border: 'none',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize:'14px',
                    fontWeight:'600',
                    transition:'all 0.3s ease',
                    display:'flex',
                    alignItems:'center',
                    gap:'6px'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = '#c82333'
                    e.target.style.transform = 'scale(1.05)'
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = '#dc3545'
                    e.target.style.transform = 'scale(1)'
                  }}
                >
                  🗑️ Remove
                </button>
              </div>
            </div>
          ))}
          <div style={{
            backgroundColor:'#fff',
            margin:'20px 30px 30px',
            padding:'25px 30px',
            borderRadius:'12px',
            boxShadow:'0 4px 16px rgba(0,0,0,0.1)',
            border:'2px solid #28a745'
          }}>
            <div style={{
              display:'flex',
              flexDirection:'column',
              gap:'15px'
            }}>
              <div style={{
                display:'flex',
                justifyContent:'space-between',
                alignItems:'center'
              }}>
                <span style={{
                  fontSize:'18px',
                  fontWeight:'600',
                  color:'#6c757d'
                }}>Subtotal:</span>
                <span style={{
                  fontSize:'18px',
                  fontWeight:'600',
                  color:'#6c757d'
                  
                }}>Rs:{totalPrice.toFixed(2)}</span>
              </div>
              <div style={{
                display:'flex',
                justifyContent:'space-between',
                alignItems:'center'
              }}>
                <span style={{
                  fontSize:'18px',
                  fontWeight:'600',
                  color:'#dc3545'
                }}>Discount (10%):</span>
                <span style={{
                  fontSize:'18px',
                  fontWeight:'600',
                  color:'#dc3545'
                }}>-Rs:{(totalPrice * 0.1).toFixed(2)}</span>
              </div>
              <hr style={{border:'1px solid #e9ecef', margin:'10px 0'}} />
              <div style={{
                display:'flex',
                justifyContent:'space-between',
                alignItems:'center'
              }}>
                <span style={{
                  fontSize:'24px',
                  fontWeight:'700',
                  color:'#2c3e50'
                }}>Final Total:</span>
                <span style={{
                  fontSize:'32px',
                  fontWeight:'800',
                  color:'#28a745'
                }}>Rs:{discountedPrice.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
    </>
  )
}

export default CartDetails