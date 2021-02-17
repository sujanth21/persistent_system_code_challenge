import React, { useState } from "react";
import axios from "axios";

const GenerateTree = () => {
  const [results, setResults] = useState([]);

  const onFormSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.get("http://localhost:5000/data");
    setResults(() => [response.data]);
  };

  return (
    <div className='ui segment'>
      <form onSubmit={onFormSubmit} style={{ marginBottom: "20px" }}>
        <input type='submit' value='Get Results' className='ui button green' />
      </form>

      <div>
        {results.length > 0 && (
          <div>
            {results[0].map((record, idx) => {
              return (
                <div className='ui info message' key={idx}>
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
