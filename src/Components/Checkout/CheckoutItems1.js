import React from 'react';
import './Checkout.css';

function CheckoutItems1(props) {
    return (
       <div>
           <div style={{ border: "2px solid #E7E7E7",width:"95%",display:"flex", height: "250px", margin: "25px"}}>
               <div>
                   <img height="300px" src="https://ik.imagekit.io/eshoppingzone1234/mac_iAhb0mqYC.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=16516161765378"></img>
               </div>
               <div style={{marginTop: "20px"}}>
                   <div style={{fontSize: "20px"}} className="textgap">Apple MacBook Air Laptop</div>
                   <div style={{fontWeight: "bold"}} className="textgap">₹83,999</div>
                   <div className="textgap">In Stock</div>
               </div>

           </div>
       </div>
    );
}

export default CheckoutItems1;
