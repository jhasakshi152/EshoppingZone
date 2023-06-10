// import React from 'react';
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import "./RightSide.css";

import Product from './Product';

function RightSidePanel(props) {

    const [ListOfProduct,setListOfProduct] = useState([]);

    useEffect(() => {
        //api call to fetch data from database
        let list =[
            { id: 12356, name: "Apple iPhone 11 (64GB) - Black" , rating:"9563" ,price:"50999" , image:"https://ik.imagekit.io/eshoppingzone1234/mobiles/71i2XhHU3pL._AC_UL640_FMwebp_QL65__w7njEwnpX.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1651181480322"},
            { id: 12315,name:"Samsung Galaxy Note 20 (Mystic Bronze, 8GB RAM",rating:"10856" ,price:"34990" , image:"https://ik.imagekit.io/eshoppingzone1234/mobiles/81_Zx6troaL._AC_UL640_FMwebp_QL65__rUYS8AwDR.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1651181482577"},
            { id: 85634,name:"OnePlus Nord 2 5G (Gray Sierra, 8GB RAM",rating:"82639" ,price:"29999"  ,image:"https://ik.imagekit.io/eshoppingzone1234/mobiles/71KVeQql77S._AC_UL640_FMwebp_QL65__tGkkKaaZe.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1651181480668"},
            { id: 86354,name:"Acer Aspire 3 AMD Ryzen 3 3250U Processor 15.6",rating:"5436", price:"34990" , image:"https://ik.imagekit.io/eshoppingzone1234/acer_edVN4_JTD.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651616176208"},
            { id: 45635,name:"Dell New Inspiron 3511 Laptop Intel i3",rating:"17856" ,price:"35990" , image:"https://ik.imagekit.io/eshoppingzone1234/dell_dVsTbj-Jm.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1651616176203" },
            { id: 18634,name:"Apple MacBook Air Laptop: Apple M1 chip, 13.3-inch",rating:"8563", price:"83990" , image:"https://ik.imagekit.io/eshoppingzone1234/mac_iAhb0mqYC.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651616176537" },
            { id: 56354,name:"boAt Xtend Smartwatch with Alexa Built-in",rating:"256" ,price:"2199" , image:"https://ik.imagekit.io/eshoppingzone1234/boat_9zpurm84p.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651616690528" },
            { id: 12566,name:"Casio Enticer Ladies Analog White Dial Women's Watch",rating:"22", price:"6565" , image:"https://ik.imagekit.io/eshoppingzone1234/casio_x5PCTFVmR.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651616690623" },
            { id: 78565,name:"Titan Analog Dial Men's Watch",rating:"56" ,price:"2395" , image:"https://ik.imagekit.io/eshoppingzone1234/titan_1oHPcykHB.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651616690880" }
               
        
        ]

        setListOfProduct(list);
    },[]);    


    return (
        <div className="RightSide__main">
            {/* <Product rating="9563" price="50999" name="Apple iPhone 11 (64GB) - Black" image="https://ik.imagekit.io/eshoppingzone1234/mobiles/71i2XhHU3pL._AC_UL640_FMwebp_QL65__w7njEwnpX.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1651181480322" />
            <Product rating="10856" price="34990" name="Samsung Galaxy Note 20 (Mystic Bronze, 8GB RAM" image="https://ik.imagekit.io/eshoppingzone1234/mobiles/81_Zx6troaL._AC_UL640_FMwebp_QL65__rUYS8AwDR.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1651181482577"/>
            <Product rating="82639" price="29999" name="OnePlus Nord 2 5G (Gray Sierra, 8GB RAM" image="https://ik.imagekit.io/eshoppingzone1234/mobiles/71KVeQql77S._AC_UL640_FMwebp_QL65__tGkkKaaZe.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1651181480668"/>
            <Product rating="5436" price="34990" name="Acer Aspire 3 AMD Ryzen 3 3250U Processor 15.6" image="https://ik.imagekit.io/eshoppingzone1234/acer_edVN4_JTD.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651616176208"/>
            <Product rating="17856" price="35990" name="Dell New Inspiron 3511 Laptop Intel i3" image="https://ik.imagekit.io/eshoppingzone1234/dell_dVsTbj-Jm.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1651616176203"/>
            <Product rating="8563" price="83990" name="Apple MacBook Air Laptop: Apple M1 chip, 13.3-inch" image="https://ik.imagekit.io/eshoppingzone1234/mac_iAhb0mqYC.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651616176537" />
            <Product rating="256" price="2199" name="boAt Xtend Smartwatch with Alexa Built-in" image="https://ik.imagekit.io/eshoppingzone1234/boat_9zpurm84p.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651616690528" />
            <Product rating="22" price="6565" name="Casio Enticer Ladies Analog White Dial Women's Watch" image="https://ik.imagekit.io/eshoppingzone1234/casio_x5PCTFVmR.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651616690623"/>
            <Product rating="56" price="2395" name="Titan Analog Dial Men's Watch" image="https://ik.imagekit.io/eshoppingzone1234/titan_1oHPcykHB.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651616690880" />
             */}

{
                ListOfProduct.map ( (item) => (
                    <Link to={`/order/`+item.id}>
                    <Product key={item.id} definition={item}/>
                    </Link>
                ))
            }
            {/* {
                ListOfProduct.map ( (item) =>{
                    <Link to={`/order/`+item.id } >
                    <Product definition={item} />
                    </Link>
                })
            } */}
        </div>
    );
}

export default RightSidePanel;

