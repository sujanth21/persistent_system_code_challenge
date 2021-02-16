import React, { useState } from "react";
import axios from "axios";

const GenerateTree = () => {
  const [results, setResults] = useState([]);
  const onFormSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.get("http://localhost:5000/data");

    setResults(response.data);

    // console.log("Response: " + response);
    // const data = response.data[0];
    // console.log(data.final_result);
    response.data.map((record) => {
      //Need to add the arrays to results --- ***
      setResults(record);
      // console.log(record.final_result);
    });

    console.log(results);
  };
  return (
    <div className='ui segment'>
      <form onSubmit={onFormSubmit}>
        <input type='submit' value='Get Results' className='ui button green' />
      </form>

      <div>{}</div>
    </div>
  );
};

export default GenerateTree;
