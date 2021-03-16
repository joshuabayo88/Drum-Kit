
// Detecting Button pressed or clicked
var buttonLength = document.querySelectorAll(".drum").length;

for(var i = 0; i<buttonLength; i++){
  document.querySelectorAll("button")[i].addEventListener("click", handleclick);
}


function handleclick(){
  var buttonInnerHTML = this.innerHTML;
  keypressed(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);

  switch (buttonInnerHTML) {
    case "w":
      var bassDrum = new Audio("sounds/kick-bass.mp3");
      bassDrum.play();
    break;

    case "a":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
    break;

    case "s":
      var firstTom = new Audio("sounds/tom-1.mp3");
      firstTom.play();
    break;

    case "d":
      var secondTom = new Audio("sounds/tom-2.mp3");
      secondTom.play();
    break;

    case "j":
      var thirdTom = new Audio("sounds/tom-3.mp3");
      thirdTom.play();
    break;

    case "k":
      var fourthTom = new Audio("sounds/tom-4.mp3");
      fourthTom.play();
    break;

    case "l":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
    break;

    default: console.console.log(buttonInnerHTML);

  }

}

// Detecting Key Pressed
document.addEventListener("keydown", function(event){
  keypressed(event.key);
  buttonAnimation(event.key);
});

function keypressed(key){
  switch (key) {
    case "w":
      var bassDrum = new Audio("sounds/kick-bass.mp3");
      bassDrum.play();
    break;

    case "a":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
    break;

    case "s":
      var firstTom = new Audio("sounds/tom-1.mp3");
      firstTom.play();
    break;

    case "d":
      var secondTom = new Audio("sounds/tom-2.mp3");
      secondTom.play();
    break;

    case "j":
      var thirdTom = new Audio("sounds/tom-3.mp3");
      thirdTom.play();
    break;

    case "k":
      var fourthTom = new Audio("sounds/tom-4.mp3");
      fourthTom.play();
    break;

    case "l":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
    break;

    default: console.console.log("wrong Key");
  }
}
function buttonAnimation(currentkey){
  var activeButton = document.querySelector("."+currentkey);
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");

  }, 200);
}
