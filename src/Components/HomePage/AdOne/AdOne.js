import React from 'react';
 import "./AdOne.css";

 function AdOne(props) {
    return (
         <div className="AdOne__main">
             <div className="AdOne__header">
                 Upto 40% off | Footwear <br></br>SALE
             </div>
             <div className="AdOne__body">
                 <img src="https://ik.imagekit.io/eshoppingzone1234/box4_2_nkj5Qfeyb.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651181466349" width = "315px" />
             </div>
             {/* <div className="AdOne__footer">
                 See more
             </div> */}
         </div>
         
     );
 }

 export default AdOne;

