const csvtojson = require("csvtojson");
const { shareFileDetails } = require("../controllers/uploads");
const { generateTree } = require("../helpers/helpers");

// @desc    JSON data from the CSV file
// @route   /data
// @access  /public
exports.getJSONData = async (req, res) => {
  //This helps to avoid the CORS issues when using API calls
  res.append("Access-Control-Allow-Origin", "*");

  const fileDetails = shareFileDetails();
  if (fileDetails.filename !== "") {
    // console.log(`File Details: ${fileDetails.filename}`);
    const filePath = `${__dirname}/../client/public/uploads/${fileDetails.filename}`;

    const jsonArray = await csvtojson().fromFile(filePath);

    generateTree(jsonArray)
      .then((data) => {
        data.forEach(loopJSON);
        res.json(data);
      })
      .catch((err) => console.log(err));
  }
};

let sum = 0;
let entities = [];
const loopJSON = (data) => {
  entities = [...entities, data.entity];
  if (Number(data.utilisation) > Number(data.limit)) {
    data.result = `Limit breached at ${data.entity} (limit = ${data.limit}, utilisation = ${data.utilisation})`;
  } else {
    data.result = "No limit breaches";
  }
  sum += Number(data.utilisation);
  if (data.parent === "") {
    sum = 0;
    sum += Number(data.utilisation);
    entities = [];
  }

  Array.isArray(data.children) && data.children.forEach(loopJSON);
  const max_limit = Math.max(data.limit);

  if (data.parent === "") {
    data.total_utilisation = sum;
    data.maximum_limit = max_limit;
    if (data.total_utilisation > data.maximum_limit) {
      data.final_result = `Limit breached at ${data.entity}, (limit = ${data.limit},direct utilisation = ${data.utilisation}, combined utilisation = ${data.total_utilisation})`;
    } else {
      data.final_result = "No limit breaches";
    }
    data.entities = [data.entity, ...entities];
  }
};
