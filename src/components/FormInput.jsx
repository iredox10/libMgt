import React from 'react'

const FormInput = ({labelFor,label,type,onchange}) => {
  return (
    <div className='flex flex-col capitalize mb-3'>
        <label htmlFor={labelFor} className=''>{label}</label>
        <input className='p-2' type={type} onChange={onchange} />
    </div>
  )
}

export default FormInput