const checkboxes = document.querySelectorAll(".inbox input[type='checkbox']");
// console.log(checkboxes);
let lastChecked;
let inBetween = false;

function handleChecked(e) {
  //   console.log(e);
  //Check if they had shift key down
  //AND check if they are checking not un-checking

  if (e.shiftKey && this.checked) {
    //loop over everysingle checkbox
    checkboxes.forEach(checkbox => {
      console.log(checkbox);
      if (checkbox === this || checkbox === lastChecked) {
        console.log("hellow");
        inBetween = !inBetween;
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
}

checkboxes.forEach(checkbox =>
  checkbox.addEventListener("click", handleChecked)
);
