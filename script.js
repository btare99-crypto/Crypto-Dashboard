const menuBtn = document.querySelector(".mobile-menu-toggle");
const hamburger = document.querySelector(".hamburger")
const sidebar = document.querySelector(".sidebar");
const closebtn = document.querySelector(".close")
console.log(hamburger)


menuBtn.style.left = "20px"; 

menuBtn.addEventListener("click", function (e) {
    e.stopPropagation();

    const sidebarTransform = getComputedStyle(sidebar).transform;

    
    if (sidebarTransform !== "none" && sidebarTransform.includes("matrix(1, 0, 0, 1, 0, 0)")) {
        
        sidebar.style.transform = "translate(-100%)";
        menuBtn.style.left = "20px"; 
        closebtn.style.display = "none";
        hamburger.style.display = "flex";
        
    } else {
        
        sidebar.style.transform = "translate(0)";
        menuBtn.style.left = "85%"; 
        closebtn.style.display = "block";
        hamburger.style.display = "none";
    }
});
