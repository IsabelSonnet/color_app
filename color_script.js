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
    }
});

//window.addEventListener("keypress", () => {
//    insertColor(event);
//}
//let result = document.getElementById("inputthree");

//let inputone = document.getElementById("inputone");
//let inputtwo = document.getElementById("inputtwo");

//let red = document.getElementById("red");
//let yellow = document.getElementById("yellow");
//let blue = document.getElementById("blue");

//event.target.className == "droptarget"

//function insertColor(event) {
//    if (event.key === "b"){
//        if ((event.target.id === red) && (inputtwo.innerHTML === yellow)){
//            result.innerHTML = "<div draggable=\"true\" id=\"orange\"> <svg width=\"100\" height=\"100\"> <circle class=\"circle\" cx=\"50\" //cy=\"50\" r=\"30\" stroke=\"orange\" stroke-width=\"3\" fill=\"orange\" /> </div>"
//        }
//        if ((inputtwo.innerHTML === red) && (inputone.innerHTML === yellow)){
//            result.innerHTML = "<div draggable=\"true\" id=\"orange\"> <svg width=\"100\" height=\"100\"> <circle class=\"circle\" cx=\"50\" //cy=\"50\" r=\"30\" stroke=\"orange\" stroke-width=\"3\" fill=\"orange\" /> </div>"
//        }
//        if ((inputone.innerHTML === blue) && (inputtwo.innerHTML === yellow)){
//            result.innerHTML = "<div draggable=\"true\" id=\"green\"> <svg width=\"100\" height=\"100\"> <circle class=\"circle\" cx=\"50\" //cy=\"50\" r=\"30\" stroke=\"green\" stroke-width=\"3\" fill=\"green\" /> </div>"
//        }
//        if ((inputtwo.innerHTML === blue) && (inputone.innerHTML === yellow)){
//            result.innerHTML = "<div draggable=\"true\" id=\"green\"> <svg width=\"100\" height=\"100\"> <circle class=\"circle\" cx=\"50\" //cy=\"50\" r=\"30\" stroke=\"green\" stroke-width=\"3\" fill=\"green\" /> </div>"
//        }
//        if ((inputone.innerHTML === blue) && (inputtwo.innerHTML === yellow)){
//            result.innerHTML = "<div draggable=\"true\" id=\"green\"> <svg width=\"100\" height=\"100\"> <circle class=\"circle\" cx=\"50\" //cy=\"50\" r=\"30\" stroke=\"green\" stroke-width=\"3\" fill=\"green\" /> </div>"
//        }
//    }
//}
