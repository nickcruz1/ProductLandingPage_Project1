<!-- Function to Create Contact Us Modal -->
function contactUs() {
  let contactBtn = document.querySelector(".contactBtn");
  
  
  contactBtn.style.display = "block";
}

<!-- Function To Close Contact Us Modal -->
function closeContactUs() {
  let contactModal = document.querySelector(".contactModal");
  
  
  contactModal.style.display = "";
}

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

<!-- Create a Function where when clicked on it displays 3 modals simultaneously (and make this responsive).. Likely need to use querySelectorAll OR do what I did above and create a template literal and then iterate through. 


<!-- Create a function that uses Reg Ex expressions (perhaps a search bar that can filter/search for items)
function searchBar() {
  
}

<!-- Create a function that displays the current date/time and updates (Kind of like a clock that is always updating the time/date)
function currentDateTime() {
  
}
