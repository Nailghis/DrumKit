var numberOfDumButton = document.querySelectorAll(".drum").length;
for(var i = 0; i < numberOfDumButton; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var choice = this.innerHTML;
    buttonAnimation(choice);
    playSound(choice);
  });
}
//higher order function
document.addEventListener("keypress", function(event){
  var choice = event.key;
  //callback function
  buttonAnimation(choice);
  playSound(choice);
});
var colors = ["#1565C0","#311B92","#3949AB","#03A9F4"];
for(var i=0; i <colors.length; i++){
  document.body.addEventListener("click", function(e){
    console.log(e);
      document.body.style.backgroundColor = colors["i"];
});
}
function playSound(choice){
  switch (choice) {
    case "w":
      var myAudio = new Audio("sounds/tom-1.mp3");
      myAudio.play();
    break;
    case "a":
      var myAudio = new Audio("sounds/tom-2.mp3");
      myAudio.play();
    break;
    case "s":
      var myAudio = new Audio("sounds/tom-3.mp3");
      myAudio.play();
    break;
    case "d":
      var myAudio = new Audio("sounds/tom-4.mp3");
      myAudio.play();
    break;
    case "j":
      var myAudio = new Audio("sounds/snare.mp3");
      myAudio.play();
    break;
    case "k":
      var myAudio = new Audio("sounds/crash.mp3");
      myAudio.play();
    break;
    case "l":
      var myAudio = new Audio("sounds/kick-bass.mp3");
      myAudio.play();
    break;
    default:
      console.log(buttonInnerHTML);
  }
}
function buttonAnimation(key){
  var pressedButton = document.querySelector("."+ key);
  pressedButton.classList.add("pressed");
  setTimeout(function () {
    pressedButton.classList.remove("pressed");
  }, 100);
}
