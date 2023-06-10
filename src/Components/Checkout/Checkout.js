import React from 'react'
import './Checkout.css'
import Grid from '@mui/material/Grid'
import CheckoutItems from './CheckoutItems'
import CheckoutItems1 from './CheckoutItems1'
import PaymentService from '../Services/payment.service'
import { CartContext } from '../CartContext';
import { useContext } from "react";

function Checkout (props) {
  const { item, size, increment } = useContext(CartContext)

  const cartValue = function(){
    let price=0;
    for(let i=0;i<item.length;i++){
        price+=parseInt(item[i].price);
    }
    return price;
}

  const payment = fare => {
    PaymentService.initiatePayment(fare)
      .then(response => {
        console.log(response.data)
        if (response.data.status == 'created') {
          let options = {
            key: 'rzp_test_j0rpBfrZGL4Nej',
            amount: response.data.amount,
            currency: 'INR',
            name: 'E-Shopping Zone',
            description: 'Online Payment',
            image:
              'https://ik.imagekit.io/eshoppingzone1234/logo1_Z6n899xfD.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651872269944',
            order_id: response.data.id,
            handler: function (response) {
              console.log(response)
              console.log('payment successful')
              alert('payment done')
            },

            prefill: {
              name: 'Sakshi',
              email: '',
              contact: ''
            },

            notes: {
              address: 'E-Shopping Zone'
            },

            theme: {
              color: '#3399cc'
            }
          }

          let rzp = new window.Razorpay(options)

          rzp.on('payment.failed', function (response) {
            console.log(response)
            alert('Oops payment failed')
          })

          rzp.open()
        }
      })
      .catch(err => {
        console.log(err)
        alert('something went wrong')
      });
  }
  return (
    <div className='checkout__body'>
      <Grid container>
        <Grid item={10}>
          <div className='checkout__container'>
            <div
              style={{
                fontSize: '30px',
                fontWeight: '500',
                padding: '20px 0px 0px 20px'
              }}
            >
                Shopping Cart
            </div>
            <div>
              {
                item.length >0 ?
                item.map( (value) => (
                  <CheckoutItems definition={value} />
              ))
              : <div style={{height: "100vh", margin: "30px" , fontSize: "20px", color:"red" }}> <strong>Please buy something :)</strong></div>


              }
              {/* <CheckoutItems />
              <CheckoutItems1 /> */}
            </div>
          </div>
        </Grid>
        <Grid item={2}>
          <div
            style={{
              width: '300px',
              height: '200px',
              padding: '20px',
              marginTop: '25px',
              backgroundColor: 'white'
            }}
          >
            <div style={{ fontSize: '26px' }}>
              Subtotal ({size} items): <strong>{ cartValue() }</strong>{' '}
            </div>
            <div style={{ paddingTop: '25px' }}>
              <button
                className='placeorder__button'
                onClick={() => payment(cartValue())}
              >
                Proceed to Buy
              </button>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Checkout
