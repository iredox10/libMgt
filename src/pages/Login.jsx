import React, { useState } from "react";
import Header from "../components/Header";
import FormInput from "../components/FormInput";
import FormBtn from "../components/FormBtn";
import axios from "axios";
import { path } from "../path";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [err, setErr] = useState('')

  const navigate = useNavigate()
  const handleSubmit = async (e) =>{
    e.preventDefault()
if(!username || !password){
  setErr('fields can not be empty')
  return
}

try{
  const res = await axios.post(`${path}/login`, {username,password})
  if(res.status == 200){
    navigate('/admin')
  }else{
    return
  }
}catch(error){
  console.log(error)
}

  }

  return (
    <div>
      <Header />
            <div className="bg-green-200 absolute w-[50%] left-[50%] -translate-x-[50%] p-5">
        <h1 className="mb-4 text-2xl font-bold">Login</h1>
        <form onClick={handleSubmit} className="relative">
          <FormInput
            labelFor={"username"}
            label={"username"}
            type={"text"}
            onchange={(e) => setUsername(e.target.value)}
          />
          <FormInput
            labelFor={"password"}
            label={"password"}
            type={"password"}
            onchange={(e) => setPassword(e.target.value)}
          />
          <FormBtn text={"Login"} />
        </form>
      </div>
    </div>
  );
};

export default Login;
