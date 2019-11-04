
function showPyramid()
{

  var other = document.getElementById("hackathon2019");
  other.style.display = "none";

  var element = document.getElementById("dynamicPyramid");

  if (element.style.display === "none")
  {
    element.style.display = "block";
  }

}


function showHackathon2019()
{
  var other = document.getElementById("dynamicPyramid");
  other.style.display = "none";

  var element = document.getElementById("hackathon2019");

  if (element.style.display === "none")
  {
    element.style.display = "block";
  }
}