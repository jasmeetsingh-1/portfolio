import React, { useEffect, useState } from "react";
import axios from "axios";

function ShowList() {
  const [data, setData] = useState("");

  const fetchData  = () => { 
    axios.get("http://localhost:3003/api/getList")
    .then((response) => {
      console.log("response of the api >>>>", response);
      setData(response.data);
    })
    .catch((error) => {
      console.error("Error fetching data: ", error);
    });
  }

    useEffect(()=>{
        fetchData();
    },[]);

  return <div>ShowList</div>;
}

export default ShowList;
