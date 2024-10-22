import React from 'react'
import axios from 'axios'
export const LS_ENDPOINT="https://api.lemonsqueezy.com/v1/";

export const LsapiInstance = axios.create({
    baseURL: LS_ENDPOINT,
    headers: {
         'Accept': 'application/vnd.api+json' ,
     'Content-Type': 'application/vnd.api+json' ,
      'Authorization': `Bearer ${process.env.PAYMENT_API}`
    },
});


const Payment = () => {
  return (
    <div>Payment</div>
  )
}

export default Payment