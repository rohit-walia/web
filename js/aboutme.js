//get window height in pixels
var winH = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight

//get all milestone elements
var allStones = document.getElementsByClassName("milestone");

//empty array to hold delta between milestone and window screen
var milestoneDelta = [];


function updateProgressBar() {
  //get total scrollale area
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

  //the % of user has scrolled = the number of pixels an element's content is scrolled / height
  var scrolled = (window.scrollY / height) * 100;

  //update progress bar height attribute
  document.getElementById("pBar").style.height = scrolled + "%";

  //populate delta between milestone and window screen
  for(var i=0; i<allStones.length; i++) {
    milestoneDelta[i] = (allStones[i].getBoundingClientRect().top/winH)*100;
  }

  //logic
  if(milestoneDelta[0]>0 && milestoneDelta[0]<80) {
    updateProgressBarText("My first employment", scrolled, "cyan");
  }
  else if (milestoneDelta[1]>0 && milestoneDelta[1]<100) {
    updateProgressBarText("I'm a car enthusiast", scrolled, "cyan");
  }
  else if (milestoneDelta[2]>0 && milestoneDelta[2]<100) {
    updateProgressBarText("My first JAVA program", scrolled, "cyan");
  }
  else if (milestoneDelta[3]>0 && milestoneDelta[3]<100) {
    updateProgressBarText("I'm pro-AI revolution", scrolled, "cyan");
  }
  else if (milestoneDelta[4]>0 && milestoneDelta[4]<100) {
    updateProgressBarText("My Last undergraduate year", scrolled, "cyan");
  }
  else if (milestoneDelta[5]>0 && milestoneDelta[5]<100) {
    updateProgressBarText("My first tech job", scrolled, "cyan");
  }
  else {
    updateProgressBarText(null, null, "transparent");
  }
}


function updateProgressBarText(text, scroll, bgColor) {
  var element = document.getElementsByClassName("progress-text")[0];;
  element.innerHTML = text;
  element.style.top = scroll + "%";
  element.style.backgroundColor = bgColor;
}