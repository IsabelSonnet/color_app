document.addEventListener("dragstart", (event) => {
  event.dataTransfer.setData("Text", event.target.id);
});

document.addEventListener("dragover", (event) => {
  event.preventDefault();
});

document.addEventListener("drop", (event) => {
  event.preventDefault();
  if ( event.target.className == "inputone" ) {
    var data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
  }
});

document.addEventListener("drop", (event) => {
  event.preventDefault();
  if ( event.target.className == "inputtwo" ) {
    var data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
  }
});
