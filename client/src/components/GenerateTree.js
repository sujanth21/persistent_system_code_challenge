import React, { useState } from "react";
import axios from "axios";
import { toggleButton } from "../helper";

import "./GenerateTree.css";

const GenerateTree = (props) => {
  const [results, setResults] = useState([]);

  const onFormSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.get("http://localhost:5000/data");
    setResults(() => [response.data]);

    toggleButton("enable", "btn_upload");
  };

  return (
    <div className='ui segment GenerateTree'>
      <form onSubmit={onFormSubmit}>
        <input type='submit' value='Get Results' className='ui button green' />
      </form>

      <div>
        {results.length > 0 && (
          <div>
            <div className='ui header blue' id='mt-2'>
              {`File name: ${props.file}`}
            </div>
            {results[0].map((record, idx) => {
              return (
                <div className='ui info message' id='my-2' key={idx}>
                  <div>{`Entities: ${record.entities}:`}</div>
                  <div>{record.final_result}</div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default GenerateTree;
