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
