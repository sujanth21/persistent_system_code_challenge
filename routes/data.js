const express = require("express");
const csvtojson = require("csvtojson");

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

router.get("/", async (req, res) => {
  const filePath = `${__dirname}/../client/public/uploads/input.csv`;

  const jsonArray = await csvtojson().fromFile(filePath);
  //   res.json(jsonArray);

  generateTree(jsonArray)
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});

module.exports = router;
