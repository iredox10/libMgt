
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "../useFetch";
import Header from "../components/Header";
import { FaPlus, FaTimes } from "react-icons/fa";
import FormInput from "../components/FormInput";
import FormBtn from "../components/FormBtn";
import axios from "axios";
import { path } from "../path";

const AdminBooks = () => {
  const { id } = useParams();
  const { data, err } = useFetch(`/get-books/${id}`);
  console.log(data);

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [author, setAuthor] = useState('')
  const [pages, setPages] = useState('')

  const [showModel, setshowModel] = useState(false);
  const [error, setError] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!title || !desc || !author || !pages) {
      setError("fill of fields");
      return;
    }
    try {
      const res = await axios.post(`${path}/add-book/${id}`,{title,desc});
      console.log(res.data);
      setshowModel(false)
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div>
        <Header />
        <div>
          <div className="bg-green-200">
            <h1>Books</h1>
            <p>List of Books</p>
            <div className="grid grid-cols-2 gap-2 my-5">
              {data &&
               data.books.map((s) => (
                  <div key={s._id} className="bg-white font-bold">
                    <Link to={`/book/${s._id}`}>
                      <h1>{s.title}</h1>
                    </Link>
                  </div>
                ))}
            </div>
          </div>
          <div>
            {showModel && (
              <div className="bg-green-200 absolute w-[50%] left-[50%] -translate-x-[50%] p-5">
                <h1 className="mb-4 text-2xl font-bold">Add Book</h1>
                <form onClick={handleSubmit} className="relative">
                  <FaTimes
                    className="absolute right-0 -top-10"
                    onClick={() => setshowModel(!showModel)}
                  />
                  <FormInput
                    labelFor={""}
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

                  <FormInput
                    labelFor={"author"}
                    label={"author"}
                    type={"text"}
                    onchange={(e) => setAuthor(e.target.value)}
                  />

                  <FormInput
                    labelFor={"pages"}
                    label={"pages"}
                    type={"text"}
                    onchange={(e) => setPages(e.target.value)}
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
    </div>
  );
};

export default AdminBooks;
