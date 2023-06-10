import React, { Component } from 'react';
import AdOne from "./AdOne/AdOne";
import "./MainPage.css";
import AdFour from './AdFour/AdFour';
import Laptop from './Laptop/Laptop';
import Watch from './Watch/Watch';
import Sofa from './Sofa/Sofa';
import Makeup from './Makeup/Makeup';

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    render() {
        return ( 
            <div className="mainpage">
                
                <div style={{ paddingTop: "620px", display : "flex", flexWrap: "wrap", marginLeft: "30px", marginRight: "30px"}} >
                    <AdOne />
                    <AdFour />
                    <Laptop />
                    <Watch/>
                    <Makeup />
                    <Sofa />
                    
                </div>
            </div>
        );
    }
}

export default MainPage;