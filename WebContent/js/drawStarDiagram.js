
var counter = 0;
var row = null;
var rowTracker = 0;
var table = document.getElementById("displayPyramid");
var slash = "/";
var backslash = "\\";
var star = "*";
var width = null;

function CalculatePyramid(height) {

  if(!/^\d+$/.test(height))
  {
    alert("Did you just attempt to break a software tester's code?");
    return;
  }

  while ( table.rows.length > 0 )
  {
    counter = 0;
    rowTracker = 0;
    table.deleteRow(0);
  }

  counter++;
  var numberOfStarsToPrint = (height*2) - 2;

  //base case
  if(height===1)
  {
     width = counter*2-2;

     row = table.insertRow(rowTracker++);

     for (var i=0; i<width; i++)
     {
       var cell = row.insertCell(i);

       if(i === width/2-1)
       {
         cell.innerHTML = slash;
       }
       else if(i === width/2)
       {
         cell.innerHTML = backslash;
       }
       else
       {
         cell.innerHTML = " ";
       }
     }
     return;
   }

  //recursive method
  CalculatePyramid(height-1);

  var leftSide = (width/2)-(numberOfStarsToPrint/2);
  var rightSide = (width/2)+(numberOfStarsToPrint/2);
  row = table.insertRow(rowTracker++);

    for (var i=0; i<width; i++)
    {
      var cell = row.insertCell(i);

      if(i < leftSide)
      {
        if(i === leftSide-1)
        {
          cell.innerHTML = slash;
        }
        else
        {
          cell.innerHTML = " ";
        }
      }
      else if(i >= rightSide)
      {
        if(i === rightSide)
        {
          cell.innerHTML = backslash;
        }
        else
        {
          cell.innerHTML = " ";
        }
      }
      else
      {
        cell.innerHTML = star;
      }
    }
    return;
}