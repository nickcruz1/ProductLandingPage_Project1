<!-- Function to Create Contact Us Modal -->
<!-- Make these Modals responsive? -->
function contactUs() {
  let contactUsModal = document.querySelectorAll(".contactUsModal");
  let threeChoices = document.querySelector(".threeChoices");
 
  <!-- After 3 seconds everything disappears -->
setTimeout(() => {
   for (let i = 0; i < contactUsModal.length; i++) {
  contactUsModal[i].style.display = "none";
}
  threeChoices.style.display = "none";
}, 3000);
  
    for (let i = 0; i < contactUsModal.length; i++) {
  contactUsModal[i].style.display = "block";
}
  threeChoices.style.display = "block";
}

<!-- Function To Close Contact Us Modal -->
<!-- Make below function if necessary/only need single function -->
// function closeContactUs() {
//   let contactModal = document.querySelector(".contactModal");
//   contactModal.style.display = "";
// }

<!-- Create an "Onload" function to Iterate through an array and display it's contents -->
function theArray() {
  let myIcon = `<i class="fa-solid fa-user text-light fs-1"></i>`;
  let myArray = [`$<h2> The Type of Icon is:${myIcon}<button>Contact Me</button>`,
                 `$<h2> The Type of Icon is:${myIcon}<button>Contact Me</button>`,
                 `$<h2> The Type of Icon is:${myIcon}<button>Contact Me</button>`];

let text = "";
for (let i = 0; i < myArray.length; i++) {
  text += myArray[i] + "<br>";
}
  
  document.getElementById("output").innerHTML = text;
}

<!-- Creates a function that displays the current date/time and updates (Kind of like a clock that is always updating the time/date)
function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  m = checkTime(m);
  document.getElementById('txt').innerHTML = "Current Time is: " + " " + h + ":" + m + " (In Military Time)";
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // this adds zeros in front of numbers < 10
  return i;
}

<!-- Create a Function where when clicked on it displays 3 modals simultaneously (and make this responsive).. Likely need to use querySelectorAll OR do what I did above and create a template literal and then iterate through. 


<!-- Create a function that uses Reg Ex expressions (perhaps a search bar that can filter/search for items)
function searchBar() {
  
}

<!-- Create a function that displays the current date/time and updates (Kind of like a clock that is always updating the time/date)
function currentDateTime() {
  
}

<!-- Create a function that pulls in/uses an API (Pick an API) -->
function callAPI() {
  
}

<!-- Create a function that utilizes setTimeOut/setInterval and changes a large part of the screen/landing page based on a set interval... perhaps have a product and then have it rotate/change to 2 others on a set interval -->
function changingDisplay() {
  
}

<!-- Create a carousel function that changes to another picture/testimonial/product when clicked on -->
function productCarousel() {
  
}

<!-- Create a function that reacts to a newsletter submission... Have a newsletter in the html and when you complete the form/"Sign Up" it updates with a message of some sort ("Like Message Sent or "All Signed up).... Same thing with the "Log In/Get Started Btn on Top"-->
function SignUp() {
  
}

<!-- Create a function that changes the language selection of the whole landing page based on the option that you choose... Figure out how to change the whole language of the page/do the same with the color? -->
function changeLanguage() {
  
}

<!-- Implement function that uses switch case -->

