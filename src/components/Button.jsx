import React from 'react'

const Button = ({btnName}) => {
  return (
    <div>
        <button className='py-3 px-5 bg-secondary text-white rounded-sm text-sm font-bold uppercase cursor-pointer'>{btnName}</button>
    </div>
  )
}

export default Button