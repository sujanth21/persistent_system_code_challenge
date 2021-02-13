import React, { useState } from "react";
import Message from "./Message";
import axios from "axios";

import "./FileUpload.css";

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
      if (err.response.status === 500) {
        setMessage("There was a problem with the server");
      } else {
        setMessage(err.response.data.msg);
      }
    }
  };

  return (
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
          <input type='submit' value='Upload' className=' ui button green' />
        </div>
      </form>
    </div>
  );
};

export default FileUpload;
