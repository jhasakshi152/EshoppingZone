import React from 'react';
import "./LeftSide.css";

function LeftSidePanel(props) {
    return (
        <div className="LeftSize__main">
            <div className="leftSide__header">
                Brand
            </div>
        <div className="leftSide__brandname">
        
        <label className="brandname">
            <input type="checkbox" value="Apple" />Apple
        </label>
        <label className="brandname">
        <input type="checkbox" value="Samsung" />Samsung
        </label>
        <label className="brandname">
        <input type="checkbox" value="Mi" />Mi
        </label>
        <label className="brandname">
            <input type="checkbox" value="Acer" />Acer
        </label>
        <label className="brandname">
        <input type="checkbox" value="Dell" />Dell
        </label>
        <label className="brandname">
        <input type="checkbox" value="MacBook" />MacBook
        </label>
        <label className="brandname">
            <input type="checkbox" value="Boat" />Boat
        </label>
        <label className="brandname">
        <input type="checkbox" value="Titan" />Titan
        </label>
        <label className="brandname">
        <input type="checkbox" value="Casio" />Casio
        </label>
        <label className="brandname">
        <input type="checkbox" value="One Plus" />One Plus
        </label>
        <label className="brandname">
        <input type="checkbox" value="Redmi" />Redmi
        </label>
        <label className="brandname">
        <input type="checkbox" value="Motorola" />Motorola
        </label>
        <label className="brandname">
        <input type="checkbox" value="Microsoft" />Microsoft
        </label>
        <label className="brandname">
        <input type="checkbox" value="RealMe" />Realme
        </label>
        <label className="brandname">
        <input type="checkbox" value="Poco" />Poco
        </label>
        <label className="brandname">
        <input type="checkbox" value="Asus" />Asus
        </label>
        <label className="brandname">
        <input type="checkbox" value="Think Pad" />Think Pad
        </label>
       </div>
      </div>  
        
    );
}

export default LeftSidePanel;
