import React, { useState } from "react";
import Message from "./Message";
import { uploadFile } from "../services";
import { toggleButton, toggleElement } from "../helper";

import "./FileUpload.css";
import GenerateTree from "./GenerateTree";

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
      
      const res = await uploadFile(formData);

      const { fileName, filePath } = res.data;
      setUploadedFile({ fileName, filePath });

      setMessage(`${file.name} file Uploaded`);
      toggleElement("msg", "block");

      toggleButton("disable", "btn_upload");
      toggleButton("enable", "btn_results");
    } catch (err) {
      if (err) {
        setMessage(err.response.data.msg);
        console.log(err.response.data.msg);
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
              id='file_upload'
            />
          </div>
          <div className='btn'>
            <input
              id='btn_upload'
              type='submit'
              value='Upload'
              className='ui button green'
            />
          </div>
        </form>
      </div>

      {uploadedFile.filePath && <GenerateTree file={filename} />}
    </div>
  );
};

export default FileUpload;
