import React from 'react'

const PaymentCard = ({name,email,country,amount}) => {
  return (
    <div className='h-[40px] flex justify-around px-14 mt-4 text-left py-2 space-x-52'>
        <p className='font-semibold text-green-800'>{name}</p>
        <p className='font-semibold'>{email}</p>
        <p className='font-semibold'>{country}</p>
        <p className='font-semibold text-green-500'>{amount}</p>
    </div>
  )
}

export default PaymentCard