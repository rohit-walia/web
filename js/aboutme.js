//get window height in pixels
var winH = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight

//get all milestone elements
var allStones = document.getElementsByClassName("milestone");

//empty array to hold delta between milestone and window screen
var milestoneDelta = [];

//progress bar text
var firstJob = "1st Employer: The Guardian";
var howThingsWork = "I have a very logical<br>mindset";


function updateProgressBar() {
  //get total scrollale area
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

  //the % of user has scrolled = the number of pixels an element's content is scrolled / height
  var scrolled = (window.scrollY / height) * 100;

  //update progress bar height attribute
  document.getElementById("pBar").style.height = scrolled + "%";

  //populate delta between milestone and window screen
  for(var i=0; i<allStones.length; i++)
  {
    milestoneDelta[i] = (allStones[i].getBoundingClientRect().top/winH)*100;
  }

  //logic
  if(milestoneDelta[0]>0 && milestoneDelta[0]<100) {
    updateProgressBarText(firstJob, scrolled, "cyan");
  }
  else if (milestoneDelta[1]>0 && milestoneDelta[1]<100) {
    updateProgressBarText(howThingsWork, scrolled, "cyan");
  }
  else {
    updateProgressBarText(null, null, "transparent");
  }
}


function updateProgressBarText(text, scroll, bgColor) {
  var textElement = document.getElementsByClassName("progress-text")[0];
  var imgElement = document.getElementsByClassName("progress-img")[0];

  textElement.innerHTML = text;
  textElement.style.top = scroll + "%";
  textElement.style.backgroundColor = bgColor;

  if(text===firstJob)
  {
    imgElement.src = "../resources/images/first_job.png";
  }
  else
  {
    imgElement.src = "";
  }


}