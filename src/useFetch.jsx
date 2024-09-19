import { useEffect, useState } from "react";
import { path } from "./path";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState();
  const [err, setErr] = useState();
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios(`${path}${url}`);
        setData(res.data);
      } catch (err) {
        setErr(err);
      }
    };
    fetch();
  },[]);
  return { data, err };
};

export default useFetch;
