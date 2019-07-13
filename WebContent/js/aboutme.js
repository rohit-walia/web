//get window height in pixels
var winH = window.innerHeight || document.documentElement.clientHeight
            || document.getElementsByTagName('body')[0].clientHeight

// get all milestone elements
var allStones = document.getElementsByClassName("milestone");

// empty array to hold delta between milestone and window screen
var milestoneDelta = [];

// progress bar text
const firstJob = "1st Employer: The Guardian News";
const longestJob = "Longest employment: 9 years";

function updateProgressBar()
{
	// get total scrollale area
	var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

	// the % of user has scrolled = the number of pixels an element's content is
	// scrolled / height
	var scrolled = (window.scrollY / height) * 100;

	// populate delta between milestone and window screen
	for (var i = 0; i < allStones.length; i++)
	{
		milestoneDelta[i] = (allStones[i].getBoundingClientRect().top / winH) * 100;
	}

	// set progress bar height equal to the scrolled amount
	document.getElementById("pBar").style.height = scrolled + "%";

	// get the elements that will hold the text and img
	var textElement = document.getElementsByClassName("progress-text")[0];
	var imgElement = document.getElementsByClassName("progress-img")[0];

	// controls for text, img, and scrollbar
	if (milestoneDelta[0] > 39 && milestoneDelta[1] > 177 || milestoneDelta[0] < -100 && milestoneDelta[1] < 35)
	{
		setTextBackgroundColor(textElement, "transparent");
		setText(textElement, null);
		setImg(imgElement, "");
		setPositionTop(textElement, 0);
	}
	else if (milestoneDelta[0] > 0 && milestoneDelta[0] <= 39 || milestoneDelta[0] > 137 && milestoneDelta[1] <= 177)
	{
		setTextBackgroundColor(textElement, "cyan");
		setText(textElement, firstJob);
		setImg(imgElement, "WebContent/resources/images/first_job.png");
		setPositionTop(textElement, scrolled);
	}
	else if (milestoneDelta[0] < -30 && milestoneDelta[1] < 100)
	{
		setTextBackgroundColor(textElement, "cyan");
		setText(textElement, longestJob);
		setImg(imgElement, "");
		setPositionTop(textElement, scrolled);
	}
	else
	{
		setTextBackgroundColor(textElement, "transparent");
		setText(textElement, null);
		setImg(imgElement, "");
		setPositionTop(textElement, 0);
	}
}

/**
 * Sets an elements background color css property
 *
 * @param element
 * @param bgColor
 */
function setTextBackgroundColor(element, bgColor)
{
	element.style.backgroundColor = bgColor;
}

/**
 * Sets an elements text via inner HTML
 *
 * @param element
 * @param text
 */
function setText(element, text)
{
	element.innerHTML = text;
}

/**
 * Sets an elements src value
 *
 * @param element img element
 * @param imgPath the src path
 */
function setImg(element, imgPath)
{

	element.src = imgPath;
}

/**
 * Sets an elements css property 'top' to the user scolled amount
 *
 * @param element
 * @param scroll the amount screen has scrolled
 */
function setPositionTop(element, scroll)
{
	element.style.top = scroll + "%";
}
