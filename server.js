const express = require("express");
const fileUpload = require("express-fileupload");

//Route files
const uploads = require("./routes/uploads");
const data = require("./routes/data");

const app = express();

app.use(fileUpload());

//Mount routers
//file upload end point
app.use("/upload", uploads);
app.use("/data", data);

//Setting up a node server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
