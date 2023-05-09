menu=document.querySelector(".menu");
menu.classList.toggle("active");

fullImgBox = document.getElementById("fullImgBox");
var fullImgBox = document.getElementById("fullImg");

function openFullImg(pic){
    fullImgBox.style.display = "flex";
    fullImgBox.src = pic;
}
function closeFullImg(){
    fullImgBox.style.display = "none";
}
