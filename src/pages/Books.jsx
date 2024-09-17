import Header from "../components/Header"
import Search from "../components/Search"
import book1 from '../assets/book1.jpeg'
import book2 from '../assets/book2.jpeg'
import book3 from '../assets/book3.jpeg'
import book4 from '../assets/book4.jpeg'
import { Link } from "react-router-dom"

const Books = () => {
  return (
    <div>
        <Header />
        <div className="p-10">
        <Search />
        <div className="bg-green-50/90 p-5">
            <h1 className="text-xl font-bold capitalize my-4">Cyber Security - first semester books</h1>
            <div className="md:grid grid-cols-4 gap-4">
                <div className="bg-white">
                   <div className="">
                    <img src={book1} alt="" className="w-full"/> 
                    </div> 
                    <div className="p-4">
                      <h1 className="capitalize font-bold text-xl">Essential Computer science</h1>
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, iste! Qui minus sint provident dolores similique nostrum possimus blanditiis fugiat.</p>
                      <div className="my-4">
                        <Link to='/book' className="bg-green-600 text-white py-2 px-4 hover:bg-green-300">View</Link>
                      </div>
                    </div>
                </div>
<div className="bg-white">
                   <div className="">
                    <img src={book2} alt="" className="w-full"/> 
                    </div> 
                    <div className="p-4">
                      <h1 className="capitalize font-bold text-xl">Essential Computer science</h1>
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, iste! Qui minus sint provident dolores similique nostrum possimus blanditiis fugiat.</p>
                      <div className="my-4">
                        <Link to='/book' className="bg-green-600 text-white py-2 px-4 hover:bg-green-300">View</Link>
                      </div>
                    </div>
                </div>
<div className="bg-white">
                   <div className="">
                    <img src={book1} alt="" className="w-full"/> 
                    </div> 
                    <div className="p-4">
                      <h1 className="capitalize font-bold text-xl">Essential Computer science</h1>
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, iste! Qui minus sint provident dolores similique nostrum possimus blanditiis fugiat.</p>
                      <div className="my-4">
                        <Link to='/book' className="bg-green-600 text-white py-2 px-4 hover:bg-green-300">View</Link>
                      </div>
                    </div>
                </div>
<div className="bg-white">
                   <div className="">
                    <img src={book2} alt="" className="w-full"/> 
                    </div> 
                    <div className="p-4">
                      <h1 className="capitalize font-bold text-xl">Essential Computer science</h1>
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, iste! Qui minus sint provident dolores similique nostrum possimus blanditiis fugiat.</p>
                      <div className="my-4">
                        <Link to='/book' className="bg-green-600 text-white py-2 px-4 hover:bg-green-300">View</Link>
                      </div>
                    </div>
                </div>
            </div>


        </div>

        </div>
    </div>
  )
}

export default Books