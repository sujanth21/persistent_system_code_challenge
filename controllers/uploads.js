const { v4: uuidv4 } = require("uuid");
const path = require("path");
//File details to pass between routes or controllers
let filename = "";
let filepath = "";

// @desc    Upload file
// @route   /upload
// @access  /public
exports.uploadFile = (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file uploaded" });
  }

  const file = req.files.file;
  filename = uuidv4() + file.name;
  filepath = `/uploads/${filename}`;

  let extname = path.extname(file.name);
  let fileType = [".csv"];

  if (!fileType.includes(extname)) {
    return res.status(400).json({ msg: "Invalid CSV file" });
  }

  file.mv(`${__dirname}/../client/public/uploads/${filename}`, (err) => {
    if (err) {
      console.log(err);
      return res.status(500).send(err);
    }

    res.json({ fileName: file.name, filePath: `/uploads/${filename}` });
  });
};

exports.shareFileDetails = () => {
  return { filename, filepath };
};
