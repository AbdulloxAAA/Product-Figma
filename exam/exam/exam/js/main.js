

// лфыолдпирмшдвипшеквшляипре
let modeBtn = document.getElementById("mode-btn");

modeBtn.addEventListener("click", function () {
if(document.body.className !="dark"){
this.firstElementChild.src="images/header/light.png";
}else{
this.firstElementChild.src="images/header/dark.png";
}
document.body.classList.toggle("dark");
});

// AAAiyb
function openNavbar() {
  document.getElementById("navbar-responsive").style.left = "0";
  // document.getElementById("navbar-responsive").style.top = "0";
}
function closeNavbar() {
  document.getElementById("navbar-responsive").style.left = "-100%";
  // document.getElementById("navbar-responsive").style.top = "-100%";
}

document.getElementById("navbar-open").addEventListener("click", openNavbar);
document.getElementById("navbar-close").addEventListener("click", closeNavbar);



// script.js
document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('back-to-top');

    // Scroll hodisasini tinglash
    window.addEventListener('scroll', function() {
        if (window.scrollY > 600) {
            backToTopButton.style.display = 'block'; // Tugmani ko'rsatish
        } else {
            backToTopButton.style.display = 'none'; // Tugmani yashirish
        }
    });

    // Tugma bosilganda yuqoriga qaytish
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
