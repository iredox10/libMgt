import { Link } from "react-router-dom";
import Header from "../components/Header";
import useFetch from "../useFetch";

const Home = () => {
  const { data: departments, err } = useFetch("/get-departments");
  console.log(departments);
  return (
    <div>
      <Header />
      <div className="p-10">
        <div className="bg-green-200/90 p-5 ">
          <h1 className="my-4 font-bold text-xl">Departments</h1>
          <div className="grid grid-cols-2 gap-5 ">
            {departments &&
              departments.map((d) => (
                <div className='bg-white font-bold p-2' >
                  <Link
                    to="/computer-science"
                  >
                    Computer Science
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
