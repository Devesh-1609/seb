const menuToggle = document.getElementById("menu-toggle");
const navList = document.getElementById("list1");

if(menuToggle){
    menuToggle.addEventListener("click", () => {
        navList.classList.toggle("show");
    });
}


const registrationOpen = false; // change to false when closed

document.getElementById("joinbutton").addEventListener("click", () => {
    if (registrationOpen) {
        window.open(
            "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform",
            "_blank"
        );
    } else {
        alert("Registrations are closed.");
    }
});

// const theme = false;

// document.getElementById("theme").addEventListener("click")