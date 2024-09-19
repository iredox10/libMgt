import React, { useEffect, useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";
import axios from "axios";
import { path } from "../path";
import Header from "../components/Header";
import FormInput from "../components/FormInput";
import FormBtn from "../components/FormBtn";
import useFetch from "../useFetch";
import { Link } from "react-router-dom";

const Admin = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [showModel, setshowModel] = useState(false);
  const [error, setError] = useState("");

  const {data:departments,err} = useFetch('/get-departments')

  console.log(departments)
  console.log(err)
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!title || !desc) {
      setError("fill of fields");
      return;
    }
    try {
      const res = await axios.post(`${path}/add-department`,{title,desc});
      console.log(res.data);
      setshowModel(false)
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Header />
      <div>
        <div className="bg-green-200">
          <h1>Departments</h1>
          <p>List of Departments</p>
          <div className="grid grid-cols-2 gap-2 my-5">
            {departments &&  departments.map(d =>(
              <div key={d._id} className="bg-white font-bold">
                <Link to={`/semesters/${d._id}`}><h1>{d.title}</h1></Link>
              </div>
            ))}
          </div>
        </div>
        <div>
          {showModel && (
            <div className="bg-green-200 absolute w-[50%] left-[50%] -translate-x-[50%] p-5">
              <h1 className="mb-4 text-2xl font-bold">Add Department</h1>
              <form onClick={handleSubmit} className="relative">
                <FaTimes
                  className="absolute right-0 -top-10"
                  onClick={() => setshowModel(!showModel)}
                />
                <FormInput
                  labelFor={"title"}
                  label={"title"}
                  type={"text"}
                  onchange={(e) => setTitle(e.target.value)}
                />
                <FormInput
                  labelFor={"desc"}
                  label={"description"}
                  type={"text"}
                  onchange={(e) => setDesc(e.target.value)}
                />
                <FormBtn text={"submit"} />
              </form>
            </div>
          )}
        </div>
        <div className="absolute right-4 bottom-10 bg-green-200 p-5   rounded-full text-green-600">
          <FaPlus
            className="text-xl cursor-pointer"
            onClick={() => setshowModel(!showModel)}
          />
        </div>
      </div>
    </div>
  );
};

export default Admin;
