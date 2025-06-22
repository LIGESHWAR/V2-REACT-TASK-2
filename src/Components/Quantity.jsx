import React, {  useState } from 'react'

const Quantity = () => {
    
    const [quantity, setQuantity] = useState(1);
  return (
    <>
<div className="container">
<button type='button' onClick={()=>{
        if (quantity > 1) {
            setQuantity(quantity-1)
        }
    }}>--</button>
   
    <span>{quantity}</span>

    <button type='button' onClick={()=>{
        setQuantity(quantity+1)
    }}>++</button>
</div>
    </>
  )
}

export default Quantity