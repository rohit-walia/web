function updateProgressBar() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  var element = document.getElementById("pBar");

  element.style.height = scrolled + "%";


  if(scrolled>1 && scrolled<15.8) {
    var e = element.getElementsByTagName("p")[0];
    e.innerHTML = "The Newspaper Boy";
    e.style.top = scrolled + "%";
    e.style.backgroundColor = "cyan";
  }
  else if(scrolled>22 && scrolled<36.5) {
    var e = element.getElementsByTagName("p")[0];
    e.innerHTML = "My first JAVA program";
    e.style.top = scrolled + "%";
    e.style.backgroundColor = "cyan";
  }
  else if(scrolled>46.2 && scrolled<60.9) {
    var e = element.getElementsByTagName("p")[0];
    e.innerHTML = "My last undergraduate year";
    e.style.top = scrolled + "%";
    e.style.backgroundColor = "cyan";
  }
  else if(scrolled>74 && scrolled<89) {
    var e = element.getElementsByTagName("p")[0];
    e.innerHTML = "My first tech job";
    e.style.top = scrolled + "%";
    e.style.backgroundColor = "cyan";
  }
  else {
    var e = element.getElementsByTagName("p")[0];
    e.innerHTML = "";
    e.style.top = scrolled + "%";
    e.style.backgroundColor = "transparent";
  }
}