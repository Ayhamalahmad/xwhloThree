let otherLinks = document.querySelector(".other-linksi");
let otherLinksA = document.querySelector(".other-linksa");
let otherLinksMenu = document.querySelector(".menu");
let year = document.querySelector(".year");
let MenuIl = document.querySelectorAll(".menu-ul-links li a");
let Menua = document.querySelectorAll(".links li a");
let GoDown = document.querySelectorAll(".go-down");
let upBotton = document.querySelector(".up");
const tabsLi = document.querySelectorAll(".linkli li");
const content = document.querySelectorAll(".preview  img");
let skillsSection = document.querySelector(".ourskills");
let theProgress = document.querySelectorAll(".the-progress span");
let number = document.querySelectorAll(".number");
let Stats = document.querySelector(".Stats");
let spnanumber = document.querySelectorAll(".spnanumber");
let ourskills = document.querySelector(".ourskills");


// Add click event listener to the otherLinks element
otherLinks.addEventListener("click", function () {
  // Toggle the "open" class on the otherLinksMenu element
  otherLinksMenu.classList.toggle("open");
  // Toggle the "opend" class on the otherLinksA element
  otherLinksA.classList.toggle("opend");
});

// Add click event listener to the whole document
document.addEventListener("click", (e) => {
  // Check if the click target is not the otherLinksMenu element or the otherLinks element
  if (!otherLinksMenu.contains(e.target) && !otherLinks.contains(e.target)) {
    // If the otherLinksMenu element has the "open" class, remove it
    if (otherLinksMenu.classList.contains("open")) {
      otherLinksMenu.classList.remove("open");
      otherLinksA.classList.remove("opend");
    }
  }
});

// Daymic year
let dynamicYearText = document.createTextNode(
  `  2019 - ${new Date().getFullYear()} `
);
year.appendChild(dynamicYearText);

// Define a function named 'scrollTo' that takes an 'element' parameter
function scrollTo(element) {
  // Add a click event listener to each of the elements in the 'element' array
  element.forEach((e) => {
    e.addEventListener("click", (e) => {
      // Prevent the default behavior of the click event
      e.preventDefault();
      // Get the target section element using the 'data-section' attribute of the clicked element
      const targetSection = document.querySelector(e.target.dataset.section);
      // Check if the target section element exists
      if (targetSection) {
        // Scroll to the target section element with a smooth behavior
        targetSection.scrollIntoView({
          behavior: "smooth",
        });
      } else {
        // Log an error message to the console if the target section element does not exist
        console.error(
          `Could not find element with selector: ${e.target.dataset.section}`
        );
      }
    });
  });
}

// Call the 'scrollTo' function with the 'MenuIl', 'Menua', 'GoDown', and '[upBotton]' elements as arguments
scrollTo(MenuIl);
scrollTo(Menua);
scrollTo(GoDown);
scrollTo([upBotton]);

// Function To Add class with scroll

function addWidthScroll(element, scrollNumber, ClassName) {
  window.addEventListener("scroll", () => {
    if (window.scrollY >= scrollNumber) {
      element.classList.add(ClassName);
    } else {
      element.classList.remove(ClassName);
    }
    // // add with to skills progress
    if (window.scrollY >= skillsSection.offsetTop - 300) {
      theProgress.forEach((span) => {
        span.style.width = span.dataset.spanwidth;
      });
    }
  });
}

addWidthScroll(upBotton, 1000, "open");

// Select all the 'li' elements from the page and convert the resulting NodeList to an array
Array.from(tabsLi).forEach((ele) => {
  // Add a click event listener to each of the 'li' elements
  ele.addEventListener("click", (e) => {
    // Remove the 'active' class from all the 'li' elements
    Array.from(tabsLi).forEach((cont) => {
      cont.classList.remove("active");
    });
    // Add the 'active' class to the clicked 'li' element
    e.currentTarget.classList.add("active");
    // Get the value of the 'data-imageToDisplay' attribute of the clicked 'li' element
    const elementToDisplay = e.currentTarget.getAttribute(
      "data-imageToDisplay"
    );
    // Hide all the content elements on the page
    Array.from(content).forEach((div) => {
      div.style.display = "none";
    });
    // Select the content element with the ID that matches the value of the 'data-imageToDisplay' attribute
    const contentToDisplay = document.querySelector(elementToDisplay);
    // Show the selected content element
    contentToDisplay.style.display = "block";
  });
});

function startCountOnScroll(elementToAnimate, sectionName) {
  // Set a variable to track whether the counter has started
  let started = false;
  // Add a scroll event listener to the window object
  window.addEventListener("scroll", () => {
    // Check if the user has scrolled to or past the specified section
    if (window.scrollY >= sectionName.offsetTop - 300) {
      // Check if the counter hasn't already started
      if (!started) {
        // Loop through each element in the array and start the counter
        elementToAnimate.forEach((num) => {
          startCounter(num);
          // Log a message to the console to confirm that the counter has started
           ("aayy");
        });
      }
      // Set the 'started' variable to true to indicate that the counter has started
      started = true;
    }
  });
}

startCountOnScroll(number, Stats);
startCountOnScroll(spnanumber, ourskills);

// Function to start the counter for an element
function startCounter(element) {
  // Get the goal number from the element's data-goal attribute
  const customAttribute = element.dataset.goal;

  // Start an interval to increment the number
  let intervalCounter = setInterval(() => {
    element.textContent++;
    // If the number has reached the goal, clear the interval
    if (element.textContent == customAttribute) {
      clearInterval(intervalCounter);
    }
  }, 2000 / customAttribute);
}

// Set the end date to February 31st, 2023 at 11:59:59 PM and convert it to a timestamp
let DateEnd = new Date("Feb 31, 2023 23:59:59").getTime();

// Set an interval to update the countdown every second
let intervalCuonter = setInterval(() => {
// Get the current date and time and convert it to a timestamp
let DateNow = new Date().getTime();
// Calculate the difference between the end date and the current date
let DateDifference = DateEnd - DateNow;
// Calculate the number of days remaining
let days = Math.floor(DateDifference / (1000 * 60 * 60 * 24));
// Display the number of days remaining in the appropriate HTML element
document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
// Calculate the number of hours remaining
const hours = Math.floor(
(DateDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
);
// Display the number of hours remaining in the appropriate HTML element
document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
// Calculate the number of minutes remaining
var minutes = Math.floor((DateDifference % (1000 * 60 * 60)) / (1000 * 60));
// Display the number of minutes remaining in the appropriate HTML element
document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}`: minutes;
// Calculate the number of seconds remaining
var seconds = Math.floor((DateDifference % (1000 * 60)) / 1000);
// Display the number of seconds remaining in the appropriate HTML element
document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}`: seconds;
// Clear the interval when the countdown reaches zero
if (DateDifference <= 0) {
clearInterval(intervalCuonter);
}
});
