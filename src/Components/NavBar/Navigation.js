import React, { Component } from 'react'
import { CartContext } from '../CartContext'
import './NavBar.css'
import { Link } from 'react-router-dom'

class NavBar extends Component {
  static contextType = CartContext
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    let { item, size, increment } = this.context
    return (
      <div>
        <div className='navbar__component'>
          <div className='navbar__logo'></div>
          <div className='navbar__locator'>
            <div className='navbar__locatorImage'></div>
            <div className='navbar__location'> Delhi </div>
          </div>
          <div className='navbar__searchcomponent'>
            <div>
              <select className='nav__dropdown'>
                <option value='All'>All</option>
                <option value='Alexa'>Electronics</option>
                <option value='Books'>Books</option>
                <option value='Baby'>Clothing and Accessories</option>
                <option value='Beauty'>Beauty and Makeup</option>
                <option value='Clothes'>Furniture</option>
                <option value='Clothes'>Shoes</option>
              </select>
            </div>
            <div>
              <input type='text' className='navbar__searchbox' />
            </div>
            <div className='navbar__searchboxdiv'>
              <div className='navbar__searchicon' />
            </div>
          </div>
          <div className='navbar_text navbar__signin'>
            <Link to='/login'>
              <div style={{ fontSize: '18px', fontWeight: 'bold' }}>Log In</div>
            </Link>

            <Link to='/signup'>
                <div style={{ fontWeight: "bold" }}>Sign Up</div>
                </Link>
          </div>
          {/* <div className='navbar_text navbar__signin'>
            <Link to='/signup'>
              <div style={{ fontSize: '18px', fontWeight: 'bold' }}>
                Sign Up
              </div>
            </Link>
          </div> */}
          
          <div className='navbar_text navbar__cart'>
            <div src='' className='cart_image'></div>
            <div className='cart__item'>{size}</div>
            <Link to='/checkout'>
              <div className='navbar_text_cart'>Cart</div>
            </Link>
          </div>
        </div>
        <div className='navbar__footer'>
        <Link to='/display'><div className='navbar__footer_text'> Best Seller</div></Link>
          <Link to='/display'><div className='navbar__footer_text'>Electronics</div></Link>
          <Link to='/display'><div className='navbar__footer_text'>Watches</div></Link>
          <Link to='/display'><div className='navbar__footer_text'>Laptops</div></Link>
          <Link to='/display'><div className='navbar__footer_text'>Iphone</div></Link>
          <Link to='/display'><div className='navbar__footer_text'>Android</div></Link>
          <Link to='/display'><div className='navbar__footer_text'>Recommended Buys</div></Link>
          <Link to='/display'><div className='navbar__footer_text'>Mostly bought items</div></Link>
        </div>
      </div>
    )
  }
}

export default NavBar
