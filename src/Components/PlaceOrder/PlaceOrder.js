// import React from 'react'
import './PlaceOrder.css'
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
// import Grid from '@material-ui/core/Grid';
import Grid from '@mui/material/Grid'
import Rating from '@mui/material/Rating'
import Paper from '@mui/material/Paper'
import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext'

function PlaceOrder (props) {
  //calling context api from CartContext.js
  const { item, size, increment } = useContext(CartContext)

  const [productDetails, setProductDetails] = useState([])
  let { id } = useParams()

  const addToCart = function () {
    increment(productDetails);
  }

  useEffect(() => {
    //api call to fetch data from database
    let list = [
      {
        id: 56354,
        name: 'BoAt Xtend Smartwatch with Alexa Built-in',
        rating: '256',
        review: '100',
        emi: '200',
        delivery: 'Monday, May 9',
        price: '2199',
        status: 'In stock',
        soldby: 'Harman Groups',
        image:
          'https://ik.imagekit.io/eshoppingzone1234/boat_9zpurm84p.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651616690528',

        about: [
          'Alexa built-in Voice Assistant that sets reminders',
          'alarms and answers questions from weather forecasts to live cricket scores at your command!',
          'big square colour LCD display with a round dial features complete capacitive touch experience to let you take control effortlessly',
          'Multiple watch faces with customizable options to match your OOTD, every day'
        ],
      },

            {
        id: 12356,
        name: 'Apple iPhone 11 (64GB) - Black',
        rating: '9563',
        review: '100',
        emi: '2500',
        delivery: 'Monday, May 9',
        price: '50999',
        status: 'In stock',
        soldby: 'Harman Groups',
        image:
          'https://ik.imagekit.io/eshoppingzone1234/mobiles/71i2XhHU3pL._AC_UL640_FMwebp_QL65__w7njEwnpX.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1651181480322',

          about: [
            '6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display',
            'Water and dust resistant (2 meters for up to 30 minutes, IP68)',
            'Dual-camera system with 12MP Ultra Wide and Wide cameras', 
            'Night mode Portrait mode and 4K video up to 60fps',
            '12MP TrueDepth front camera with Portrait mode, 4K video, and Slo-Mo',
            'Face ID for secure authentication'
          ],

        },
      {
        id: 12315,
        name: 'Samsung Galaxy Note 20 (Mystic Bronze, 8GB RAM',
        rating: '10856',
        review: '500',
        emi: '2500',
        delivery: 'Monday, May 9',
        price: '34990',
        status: 'In stock',
        soldby: 'Harman Groups',
        image:
          'https://ik.imagekit.io/eshoppingzone1234/mobiles/81_Zx6troaL._AC_UL640_FMwebp_QL65__rUYS8AwDR.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1651181482577',

          about: [
            'This Certified Refurbished product is tested to work and look like new with minimal to no signs of wear & tear', 
            'the product comes with relevant accessories',
            '64+12+12MP triple rear camera | 10MP front camera',
            '16.95 centimeters (6.7-inch) FHD+ dynamic Amoled display with 2400 x 1080 pixels resolution', 
            'Memory, Storage & SIM: 8GB RAM | 256GB internal memory | Dual SIM (nano+nano) dual-standby (4G+4G)'
            
          ],  
      },

      {
        id: 85634,
        name: 'OnePlus Nord 2 5G (Gray Sierra, 8GB RAM)',
        rating: '826',
        review: '590',
        emi: '1900',
        delivery: 'Monday, May 9',
        price: '29999',
        status: 'In stock',
        soldby: 'Harman Groups',
        image:
          'https://ik.imagekit.io/eshoppingzone1234/mobiles/71KVeQql77S._AC_UL640_FMwebp_QL65__tGkkKaaZe.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1651181480668',

          about: [
            'Camera: Sony IMX 766 50MP+8MP+2MP AI Triple Camera with 4K@30FPS|1080p video at 30/60 fps', 
            'Chipset: MediaTek Dimensity 1200-AI - The octa-core Dimensity 1200-AI features one of the fastest smartphone CPUs ever',
            'Display: 6.43-inch, 90Hz Fluid AMOLED display ',
            'Memory, Storage & SIM: 8GB RAM | 128GB internal memory on UFS 3.1 storage system', 
            'Operating System: OxygenOS 11.3 operating system based on Android 11'
            
          ],

      },
      {
        id: 86354,
        name: 'Acer Aspire 3 AMD Ryzen 3 3250U Processor 15.6',
        rating: '852',
        review: '698',
        emi: '2200',
        delivery: 'Monday, May 9',
        price: '34990',
        status: 'In stock',
        soldby: 'Harman Groups',
        image:
          'https://ik.imagekit.io/eshoppingzone1234/acer_edVN4_JTD.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651616176208',

          about: [
            'Powerful and portable laptops for schools and colleges', 
            'Featuring the new AMD Ryzen 3 3250U dual-core processor',
            'Ease of Storage : 8 GB RAM Laptop with 512GB',
            'Enhanced Video Conferencing and Good Battery Life', 
            'Additional Features : The Laptop comes with Windows 10 Home and 1 year International Travellers Warranty'
            
          ],

      },
      {
        id: 45635,
        name: 'Dell New Inspiron 3511 Laptop Intel i3',
        rating: '1785',
        review: '325',
        emi: '3500',
        delivery: 'Monday, May 9',
        price: '35990',
        status: 'In stock',
        soldby: 'Harman Groups',
        image:
          'https://ik.imagekit.io/eshoppingzone1234/dell_dVsTbj-Jm.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1651616176203',

          about: [
            'Processor: Intel i3-1115G4 (1.70 GHz up to 4.10 GHz)', 
            'RAM & Storage: 8GB DDR4 (2 DIMM Slots) & 1TB HDD',
            'Software: Win 11 + Office H&S 2021',
            'Display: 15.6" FHD WVA AG Narrow Border', 
            'WIfi & BT: 802.11ac 1x1 WiFi and Bluetooth'
            
          ],
      },
      {
        id: 18634,
        name: 'Apple MacBook Air Laptop: Apple M1 chip, 13.3-inch',
        rating: '8563',
        review: '325',
        emi: '5500',
        delivery: 'Monday, May 9',
        price: '83990',
        status: 'In stock',
        soldby: 'Harman Groups',
        image:
          'https://ik.imagekit.io/eshoppingzone1234/mac_iAhb0mqYC.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651616176537',

          about: [
            'All-Day Battery Life – Go longer than ever with up to 18 hours of battery life.', 
            'Powerful Performance – Take on everything from professional-quality editing to action-packed gaming with ease.',
            'Superfast Memory – 8GB of unified memory makes your entire system speedy and responsive.',
            'Environmentally Friendly – MacBook Air is made with a 100% recycled aluminum enclosure and uses less energy for a smaller carbon footprint' 
            
            
          ],
      },
    
      {
        id: 12566,
        name: "Casio Enticer Ladies Analog White Dial Women's Watch",
        rating: '22',
        review: '325',
        emi: '535',
        delivery: 'Monday, May 9',
        price: '6565',
        status: 'In stock',
        soldby: 'Harman Groups',
        image:
          'https://ik.imagekit.io/eshoppingzone1234/casio_x5PCTFVmR.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651616690623',

          about: [
            'Rose Gold ion plated Case and Band: Water Resistant', 
            'Item shape: Round',
            'Ideal for birthday, anniversary and wedding gift',
            'If this product is sold by Amazon, please review the manufacturer’s website for warranty information.'               
          ],

      },
      {
        id: 78565,
        name: "Titan Analog Dial Men's Watch",
        rating: '236',
        review: '225',
        emi: '100',
        delivery: 'Monday, May 9',
        price: '2395',
        status: 'In stock',
        soldby: 'Harman Groups',
        image:
          'https://ik.imagekit.io/eshoppingzone1234/titan_1oHPcykHB.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651616690880',

          about: [
            'Dial Color: Brown, Case Shape: Round, Dial Glass Material: Mineral', 
            'Watch Movement Type: Quartz, Watch Display Type: Analog',
            'Case Material: Metal, FUNCTION: Analog with Date',
            'Water Resistance Depth: 50 meters'               
          ],

      }
    ]
    //to filter out the product based on the //id we are receiving from the url
    let item = list.filter(item => {
      if (item.id == id) return item
    })
    console.log(id)
    setProductDetails(item[0])
  }, [])

  return (
    <div>
      <Grid container>
        <Grid item xs={6}>
          <img className='placeorder__image' src={productDetails.image} />
        </Grid>
        <Grid item xs={4}>
          <div className='placeorder__description'>
            <div
              style={{ fontSize: '25px', lineHeight: '38px', fontWeight: 500 }}
            >
              {' '}
              {productDetails.name}
            </div>
            <div>
              <Rating
                name='read-only'
                value='3'
                readOnly
                style={{ fontSize: '20px' }}
              />
              {productDetails.rating} ratings<br></br>
              {productDetails.review} + answered questions
            </div>
            <hr></hr>
            <div>
              <div className='textgap'>
                {' '}
                Price: <span className='pricetag'> {productDetails.price}</span>
              </div>
              <div className='textgap'>
                FREE delivery:<strong>{productDetails.delivery}</strong>
              </div>
              <div className='textgap'>
                EMI starts at ₹ {productDetails.emi}. No cost EMI available
              </div>
              <div
                style={{ color: 'blue', fontSize: '20px' }}
                className='textgap'
              >
                {productDetails.status}
              </div>
              <div className='textgap'>
                Sold by <strong> {productDetails.soldby}</strong> and fulfilled
                by Eshoppingzone{' '}
              </div>
            </div>
            <div>
              <br></br>
              <div style={{ fontSize: '20px' }} className='textgap'>
                <strong>About this item</strong> {productDetails.about}
              </div>
              <div>
                <ul style={{listStyle:'none'}}>
                  {productDetails.about != undefined ? (
                    productDetails.about.map(item => <li>{item.data}</li>)
                  ) : (
                    <span></span>
                  )}
                </ul>
                
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={2}>
          <Paper variant='outlined' className='placeorder__order'>
            <div style={{ marginTop: '10px' }}>
              <strong>Add an Accessory</strong>
            </div>
            <div>
              <label>
                <input type='checkbox'></input>Airdopes
              </label>
              <br></br>
              <label>
                <input type='checkbox'></input>20W USB Power Adapter
              </label>
            </div>
            <div>
            {/* <Link to='/checkout'> */}
              <button
                className='placeorder__button addtocart'
                onClick={addToCart}>
                Add to Cart
              </button>
              {/* </Link> */}
              <Link to='/checkout'>
                <button className='placeorder__button buynow'>Buy Now</button>
              </Link>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default PlaceOrder
