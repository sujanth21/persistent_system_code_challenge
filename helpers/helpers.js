//Generate tree object structure
exports.generateTree = async (data) => {
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

//Remove duplicate entries
const removeDuplicate = (arr) => {
  let entities = arr.map((obj) => obj.entity);

  return arr.filter(
    ({ entity }, index) => !entities.includes(entity, index + 1)
  );
};
