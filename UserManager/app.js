// stepper
const slidePage = document.querySelector(".slide-page");
const nextBtnFirst = document.querySelector(".firstNext");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submit");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
let current = 1;

nextBtnFirst.addEventListener("click", function (event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-25%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
});
nextBtnSec.addEventListener("click", function (event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-50%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
});
nextBtnThird.addEventListener("click", function (event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-75%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
});
submitBtn.addEventListener("click", function () {
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
    setTimeout(function () {
        alert("Your Form Successfully Signed up");
        location.reload();
    }, 800);
});

prevBtnSec.addEventListener("click", function (event) {
    event.preventDefault();
    slidePage.style.marginLeft = "0%";
    bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
});
prevBtnThird.addEventListener("click", function (event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-25%";
    bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
});
prevBtnFourth.addEventListener("click", function (event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-50%";
    bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
});

// Dropdown JS

// Define the countryList array
var countryList = ["USA", "Canada", "Mexico", "Germany", "France", "Spain"];
var syllabusList = ["CBSE", "ISCE"];
var gradeList = ['10','9','8','7','6']

// Get the dropdown element
var Countrydropdown = document.getElementById("country-dropdown");
var Syllabusdropdown = document.getElementById("syllabus-dropdown");
var Gradedropdown = document.getElementById("grade-dropdown");


// Populate the dropdown with options
for (var i = 0; i < countryList.length; i++) {
    var Coption = document.createElement("option");
    Coption.text = countryList[i];
    Countrydropdown.add(Coption);
}

for (var i = 0; i < syllabusList.length; i++) {
    var Soption = document.createElement("option");
    Soption.text = syllabusList[i];
    Syllabusdropdown.add(Soption);
}

for (var i = 0; i < gradeList.length; i++) {
    var Goption = document.createElement("option");
    Goption.text = gradeList[i];
    Gradedropdown.add(Goption);
}

// Add event listener for the dropdown
Countrydropdown.addEventListener("change", function () {
    var selectedValue = Countrydropdown.value;
    console.log("Selected country:", selectedValue);
});

// Add event listener for the dropdown
Syllabusdropdown.addEventListener("change", function () {
    var selectedValue2 = Syllabusdropdown.value;
    console.log("Selected Grade:", selectedValue2);
});

// Add event listener for the dropdown
Gradedropdown.addEventListener("change", function () {
    var selectedValue1 = Gradedropdown.value;
    console.log("Selected Grade:", selectedValue1);
});


