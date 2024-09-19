import React from 'react'

const FormBtn = ({text}) => {
  return (
    <div>
        <button type='submit' className='capitalize font-bold bg-green-500 px-4 py-2 hover:text-green-200'>{text}</button>
    </div>
  )
}

export default FormBtn