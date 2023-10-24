const pwd = document.querySelector("#pwd");
const confirmpwd = document.querySelector("#confirmpwd");
const span = document.querySelector("span.invalid")
const form = document.getElementById("form");

form.addEventListener('submit', function(event) {
    event.preventDefault();
})

pwd.addEventListener("input", e => {
    if(e.target.value == confirmpwd.value) {
        console.log("valid");
        e.target.classList.remove("invalid");
        confirmpwd.classList.remove("invalid")
        span.textContent = "";
    } else {
        pwd.className="invalid";
        confirmpwd.className="invalid";
        span.textContent= "* Passwords do not match";
    }

});

confirmpwd.addEventListener("input", e => {
    if(e.target.value == pwd.value) {
        console.log("valid");
        e.target.classList.remove("invalid");
        pwd.classList.remove("invalid")
        span.textContent = "";
    } else {
        console.log("invalid");
        pwd.className="invalid";
        confirmpwd.className="invalid";
        span.textContent= "* Passwords do not match";
    }
  
});

