document.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("Text", event.target.id);
});

document.addEventListener("dragover", (event) => {
    event.preventDefault();
});

document.addEventListener("drop", (event) => {
    event.preventDefault();
    if (event.target.className == "droptarget") {
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
        if (data === "red" && event.target.id  === "inputone") {
            inputone_color = "red";
        }
        if (data === "yellow" && event.target.id  === "inputone") {
            inputone_color = "yellow";
        }
        if (data === "blue" && event.target.id  === "inputone") {
            inputone_color = "blue";
        }
        if (data === "red" && event.target.id === "inputtwo") {
            inputtwo_color = "red";
        }
        if (data === "yellow" && event.target.id === "inputtwo") {
            inputtwo_color = "yellow";
        }
       if (data === "blue" && event.target.id === "inputtwo") {
            inputtwo_color = "blue";
        }
    }
});

window.addEventListener("keypress", insertColor);

var inputone_color = "";
var inputtwo_color = "";

let result = document.getElementById("inputthree");

let inputone = document.getElementById("inputone");
let inputtwo = document.getElementById("inputtwo");

let red = document.getElementById("red");
let yellow = document.getElementById("yellow");
let blue = document.getElementById("blue");

function insertColor(event) {
    console.log(inputone_color);
    console.log(inputtwo_color);
    if (event.key === "c"){
        if (inputone_color === "red" && inputtwo_color === "yellow"){
            result.innerHTML = "<div draggable=\"true\" id=\"orange\"> <svg width=\"100\" height=\"100\"> <circle class=\"circle\" cx=\"50\" //cy=\"50\" r=\"30\" stroke=\"orange\" stroke-width=\"3\" fill=\"orange\" /> </div>";
            document.body.style.background = "orange";
        }
        if (inputone_color === "yellow" && inputtwo_color === "red"){
            result.innerHTML = "<div draggable=\"true\" id=\"orange\"> <svg width=\"100\" height=\"100\"> <circle class=\"circle\" cx=\"50\" //cy=\"50\" r=\"30\" stroke=\"orange\" stroke-width=\"3\" fill=\"orange\" /> </div>";
          document.body.style.background = "orange";
        }
        if (inputone_color === "blue" && inputtwo_color === "yellow"){
            result.innerHTML = "<div draggable=\"true\" id=\"green\"> <svg width=\"100\" height=\"100\"> <circle class=\"circle\" cx=\"50\" //cy=\"50\" r=\"30\" stroke=\"green\" stroke-width=\"3\" fill=\"green\" /> </div>";
          document.body.style.background = "green";
        }
        if (inputone_color === "yellow" && inputtwo_color === "blue"){
            result.innerHTML = "<div draggable=\"true\" id=\"green\"> <svg width=\"100\" height=\"100\"> <circle class=\"circle\" cx=\"50\" //cy=\"50\" r=\"30\" stroke=\"green\" stroke-width=\"3\" fill=\"green\" /> </div>";
          document.body.style.background = "green";
        }
        if (inputone_color === "red" && inputtwo_color === "blue"){
            result.innerHTML = "<div draggable=\"true\" id=\"purple\"> <svg width=\"100\" height=\"100\"> <circle class=\"circle\" cx=\"50\" //cy=\"50\" r=\"30\" stroke=\"purple\" stroke-width=\"3\" fill=\"purple\" /> </div>";
          document.body.style.background = "purple";
        }
       if (inputone_color === "blue" && inputtwo_color === "red"){
            result.innerHTML = "<div draggable=\"true\" id=\"purple\"> <svg width=\"100\" height=\"100\"> <circle class=\"circle\" cx=\"50\" //cy=\"50\" r=\"30\" stroke=\"purple\" stroke-width=\"3\" fill=\"purple\" /> </div>";
         document.body.style.background = "purple";
        }
    }
}
