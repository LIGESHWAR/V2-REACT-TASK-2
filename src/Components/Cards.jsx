import React, { useContext } from 'react'
import MyContext from '../Context/MyContext'
import AddToCart from './AddToCart'

const Cards = () => {
    const {data}=useContext(MyContext)
  return (
    <>
        <div className="cover" style={{
          display:'flex',
          flexWrap:'wrap',
          justifyContent:'center',
          gap:'25px',
          padding:'30px 20px',
          backgroundColor:'#f8f9fa',
          minHeight:'100vh'
        }}>
            {
        data&&data.map((item)=>(
            <div className="wrapper" key={item.id} style={{
              backgroundColor:'#fff',
              border:'1px solid #e9ecef',
              borderRadius:'15px',
              height:'550px',
              width:'350px',
              boxShadow:'0 8px 25px rgba(0,0,0,0.1)',
              transition:'all 0.3s ease',
              overflow:'hidden',
              display:'flex',
              flexDirection:'column'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)'
              e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.15)'
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)'
            }}
            >
                <div className="image" style={{
                  padding:'20px',
                  backgroundColor:'#f8f9fa',
                  display:'flex',
                  alignItems:'center',
                  justifyContent:'center',
                  height:'280px',
                  borderBottom:'1px solid #e9ecef'
                }}>
                    <img src={item.image} alt={item.title} style={{
                      height:'240px',
                      width:'240px',
                      objectFit:'contain',
                      borderRadius:'8px'
                    }} />
                </div>
                <div className="content" style={{
                  padding:'20px',
                  flex:'1',
                  display:'flex',
                  flexDirection:'column',
                  justifyContent:'space-between'
                }}>
                  <div className="title" style={{
                    marginBottom:'15px'
                  }}>
                    <h3 style={{
                      fontSize:'16px',
                      fontWeight:'600',
                      color:'#2c3e50',
                      lineHeight:'1.4',
                      margin:'0',
                      height:'48px',
                      overflow:'hidden',
                      display:'-webkit-box',
                      WebkitLineClamp:'2',
                      WebkitBoxOrient:'vertical'
                    }}>{item.title}</h3>
                  </div>
                  <div className="info" style={{
                    display:'flex',
                    justifyContent:'space-between',
                    alignItems:'center',
                    marginBottom:'20px',
                    padding:'15px',
                    backgroundColor:'#f8f9fa',
                    borderRadius:'10px'
                  }}>
                      <div className="rating" style={{
                        display:'flex',
                        alignItems:'center',
                        gap:'5px'
                      }}>
                        <span style={{
                          fontSize:'18px'
                        }}>⭐</span>
                        <span style={{
                          fontSize:'14px',
                          fontWeight:'600',
                          color:'#495057'
                        }}>{item.rating.rate}</span>
                      </div>
                      <div className="price" style={{
                        fontSize:'20px',
                        fontWeight:'700',
                        color:'#28a745'
                      }}>
                         Rs:{item.price}
                      </div>
                  </div>
                  <div className="addtocartbtn" style={{
                    display:'flex',
                    justifyContent:'center'
                  }}>
                     <AddToCart product={item}/>
                  </div>
                </div>
            </div>
        ))
    }
    </div>
    </>
    
  )
}

export default Cards