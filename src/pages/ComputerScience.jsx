import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

const ComputerScience = () => {
  return (
    <div>
        <Header />
        <div className='p-10   bg-green-200/90'>
        <h1>Computer Science</h1>
        <div className='md:grid grid-cols-2 gap-4'>
        <Link to='/books' className='text-capitalize flex flex-col items-center bg-green-100'><span className='md:text-5xl font-bold'>1st</span> <span>Semester</span></Link>
        <Link to='/books' className='text-capitalize flex flex-col items-center bg-green-100'><span className='md:text-5xl font-bold'>2nd</span> <span>Semester</span></Link>
        <Link to='/books' className='text-capitalize flex flex-col items-center bg-green-100'><span className='md:text-5xl font-bold'>3rd</span> <span>Semester</span></Link>
        <Link to='/books' className='text-capitalize flex flex-col items-center bg-green-100'><span className='md:text-5xl font-bold'>4th</span> <span>Semester</span></Link>
        </div>
        </div>
    </div>
  )
}

export default ComputerScience