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
        if (data === "yellow" && event.target.id === "inputtwo") {
            inputtwo_color = "yellow";
        }
    }
});

//<img>src = ""</img>

window.addEventListener("keypress", insertColor);

var inputone_color = "";
var inputtwo_color = "";

let result = document.getElementById("inputthree");

let inputone = document.getElementById("inputone");
let inputtwo = document.getElementById("inputtwo");

let red = document.getElementById("red");
let yellow = document.getElementById("yellow");
let blue = document.getElementById("blue");

//event.target.className == "droptarget"

function insertColor(event) {
    console.log(inputone_color);
    console.log(inputtwo_color);
    if (event.key === "b"){
        if (inputone_color === "red" && inputtwo_color === "yellow"){
            document.body.style.background = "orange";
        }
        if ((inputtwo.innerHTML === red) && (inputone.innerHTML === yellow)){
            result.innerHTML = "<div draggable=\"true\" id=\"orange\"> <svg width=\"100\" height=\"100\"> <circle class=\"circle\" cx=\"50\" //cy=\"50\" r=\"30\" stroke=\"orange\" stroke-width=\"3\" fill=\"orange\" /> </div>";
        }
        if ((inputone.innerHTML === blue) && (inputtwo.innerHTML === yellow)){
            result.innerHTML = "<div draggable=\"true\" id=\"green\"> <svg width=\"100\" height=\"100\"> <circle class=\"circle\" cx=\"50\" //cy=\"50\" r=\"30\" stroke=\"green\" stroke-width=\"3\" fill=\"green\" /> </div>";
        }
        if ((inputtwo.innerHTML === blue) && (inputone.innerHTML === yellow)){
            result.innerHTML = "<div draggable=\"true\" id=\"green\"> <svg width=\"100\" height=\"100\"> <circle class=\"circle\" cx=\"50\" //cy=\"50\" r=\"30\" stroke=\"green\" stroke-width=\"3\" fill=\"green\" /> </div>";
        }
        if ((inputone.innerHTML === blue) && (inputtwo.innerHTML === yellow)){
            result.innerHTML = "<div draggable=\"true\" id=\"green\"> <svg width=\"100\" height=\"100\"> <circle class=\"circle\" cx=\"50\" //cy=\"50\" r=\"30\" stroke=\"green\" stroke-width=\"3\" fill=\"green\" /> </div>";
        }
    }
}
