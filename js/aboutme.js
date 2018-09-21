function updateProgressBar() {

  //the number of pixels an element's content is scrolled
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;

  //get total scrollale area
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

  //the % of user has scrolled
  var scrolled = (winScroll / height) * 100;

  //get window height in pixels
  var winH = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;

  //get all milestone elements
  var allStones = document.getElementsByClassName("milestone");

  //get element where text should be placed
  var progressBarText = document.getElementsByClassName("progress-text")[0];

  //update progress bar height attribute
  document.getElementById("pBar").style.height = scrolled + "%";

  //populate delta between milestone and window screen
  var milestoneDelta = [];
  for(var i=0; i<allStones.length; i++) {
    milestoneDelta[i] = (allStones[i].getBoundingClientRect().top/winH)*100;
  }

  //logic
  if(milestoneDelta[0]>0 && milestoneDelta[0]<80) {
    updateProgressBarText(progressBarText, "My first employment", scrolled, "cyan");
  }
  else if (milestoneDelta[1]>0 && milestoneDelta[1]<100) {
    updateProgressBarText(progressBarText, "I'm a car enthusiast", scrolled, "cyan");
  }
  else if (milestoneDelta[2]>0 && milestoneDelta[2]<100) {
    updateProgressBarText(progressBarText, "My first JAVA program", scrolled, "cyan");
  }
  else if (milestoneDelta[3]>0 && milestoneDelta[3]<100) {
    updateProgressBarText(progressBarText, "I'm pro-AI revolution", scrolled, "cyan");
  }
  else if (milestoneDelta[4]>0 && milestoneDelta[4]<100) {
    updateProgressBarText(progressBarText, "My Last undergraduate year", scrolled, "cyan");
  }
  else if (milestoneDelta[5]>0 && milestoneDelta[5]<100) {
    updateProgressBarText(progressBarText, "My first tech job", scrolled, "cyan");
  }
  else {
    updateProgressBarText(progressBarText, null, null, "transparent");
  }

}


function updateProgressBarText(element, text, scroll, bgColor) {
  element.innerHTML = text;
  element.style.top = scroll + "%";
  element.style.backgroundColor = bgColor;
}