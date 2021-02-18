//Enable or disable button
export const toggleButton = (toggle, btn_id) => {
  if (toggle === "disable") {
    document.getElementById(btn_id).disabled = true;
  } else if (toggle === "enable") {
    document.getElementById(btn_id).disabled = false;
  }
};

// Hide element
export const toggleElement = (ele_id, toggle_value) => {
  document.getElementById(ele_id).style.display = toggle_value;
};
