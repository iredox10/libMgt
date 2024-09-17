import { Link } from "react-router-dom";
import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="p-10">
        
        <div className="bg-green-200/90 p-5 ">
          <h1 className="my-4">Department</h1>
          <div className="grid grid-cols-2 gap-5 ">
            <Link to="/computer-science" className="bg-white font-bold p-2">
              Computer Science
            </Link>
            <Link to="/software-engineering" className="bg-white font-bold p-2">
              Software Engineering
            </Link>
            <Link to="/cyber-security" className="bg-white font-bold p-2">
              Cyber security
            </Link>
            <Link to="/networking" className="bg-white font-bold p-2">
              Networking
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
