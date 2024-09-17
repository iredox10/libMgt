import React from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import book1 from '../assets/book1.jpeg'

const Book = () => {
  return (
    <div>
        <Header />
        <div className='my-22'>
            <div className='flex p-10'>
                <div>
                    <div className='w-[40%] '>
                        <img src={book1} alt="" className='w-full'/>
                        <button className='text-white bg-green-400 block my-5 py2 px-4'>DownLoad</button>
                    </div>
                </div>
                <div className='capitalize bg-green-100 p-2'>
                    <p>Book Detail</p>
                    <p><span className='font-bold'>Book Name:</span>Essential Computer Science</p>
                    <p><span className='font-bold'>Author:</span>Pual d.</p>
                    <p><span className='font-bold'>pages</span>350p</p>
                    <p><span className='font-bold'>full description</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus deleniti explicabo aspernatur praesentium incidunt soluta aperiam quod atque autem! Eligendi, enim delectus? Blanditiis officia dolor corporis nihil esse illum cum error a inventore sint? Neque dolorem tempora molestias ratione consequuntur?</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Book