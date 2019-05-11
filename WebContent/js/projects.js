
function showPyramid()
{

  var other = document.getElementById("automationFramework");
  other.style.display = "none";

  var element = document.getElementById("dynamicPyramid");

  if (element.style.display === "none")
  {
    element.style.display = "block";
  }
  else
  {
    element.style.display = "none";
  }
}


function showAutomation()
{
  var other = document.getElementById("dynamicPyramid");
  other.style.display = "none";

  var element = document.getElementById("automationFramework");

  if (element.style.display === "none")
  {
    element.style.display = "block";
  }
  else
  {
    element.style.display = "none";
  }
}