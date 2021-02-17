const express = require("express");
const csvtojson = require("csvtojson");
const { shareFileDetails } = require("../controllers/uploads");

const router = express.Router();

const removeDuplicate = (arr) => {
  let entities = arr.map((obj) => obj.entity);

  return arr.filter(
    ({ entity }, index) => !entities.includes(entity, index + 1)
  );
};

const generateTree = async (data) => {
  const entityMapping = data.reduce((acc, el, i) => {
    acc[el.entity] = i;
    return acc;
  }, {});

  let root;
  let parent = [];

  data.forEach((el) => {
    if (el.parent === "") {
      root = el;
      return;
    }

    const parentEl = data[entityMapping[el.parent]];
    parentEl.children = [...(parentEl.children || []), el];

    parent.push(root);
  });

  parent = removeDuplicate(parent);
  return parent;
};
let sum = 0;
const loopJSON = (data) => {
  if (Number(data.utilisation) > Number(data.limit)) {
    data.result = `Limit breached at ${data.entity} (limit = ${data.limit}, utilisation = ${data.utilisation})`;
  } else {
    data.result = "No limit breaches";
  }
  sum += Number(data.utilisation);
  if (data.parent === "") {
    sum = 0;
    sum += Number(data.utilisation);
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
  }
};

router.get("/", async (req, res) => {
  res.append("Access-Control-Allow-Origin", "*");

  const fileDetails = shareFileDetails();
  if (fileDetails.filename !== "") {
    console.log(`File Details: ${fileDetails.filename}`);
    // const filePath = `${__dirname}/../client/public/uploads/source.csv`;
    const filePath = `${__dirname}/../client/public/uploads/${fileDetails.filename}`;

    const jsonArray = await csvtojson().fromFile(filePath);

    generateTree(jsonArray)
      .then((data) => {
        data.forEach(loopJSON);

        res.json(data);
      })
      .catch((err) => console.log(err));
  }
});

module.exports = router;
