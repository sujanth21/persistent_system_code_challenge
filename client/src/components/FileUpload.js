import React, { useState } from "react";
import Message from "./Message";
import axios from "axios";
import { parse } from "papaparse";
import csvtojson from "csvtojson";

import "./FileUpload.css";
import GenerateTree from "./GenerateTree";
import RenderData from "./RenderData";

const FileUpload = () => {
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Choose CSV");
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState("");

  const onChangeHandler = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const { fileName, filePath } = res.data;
      setUploadedFile({ fileName, filePath });

      setMessage("File Uploaded");
    } catch (err) {
      if (err) {
        console.log(err);
      }
    }
  };

  return (
    <div>
      <div className='FileUpload'>
        {message && <Message msg={message} />}
        <form onSubmit={onSubmitHandler}>
          <div className='ui fluid input'>
            <input
              type='file'
              onChange={onChangeHandler}
              placeholder={filename}
            />
          </div>
          <div className='btn'>
            <input type='submit' value='Upload' className='ui button green' />
          </div>
        </form>
      </div>

      {uploadedFile.filePath && <GenerateTree />}
    </div>
  );
};

export default FileUpload;
