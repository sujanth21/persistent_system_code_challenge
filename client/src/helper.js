//Enable or disable button
export const toggleButton = (toggle, btn_id) => {
  if (toggle === "disable") {
    document.getElementById(btn_id).disabled = true;
  } else if (toggle === "enable") {
    document.getElementById(btn_id).disabled = false;
  }
};
