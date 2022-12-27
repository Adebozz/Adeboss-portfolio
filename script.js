



const backToTopButton = document.querySelector('#back-to-top-btn');

window.addEventListener("scroll", scrollFuction);

function scrollFuction(){ //Show backToTopButton
if(window.pageYOffset > 300){
    backToTopButton.classList.add("btnEntrance");
    backToTopButton.style.display = "block";
}  
else{//Hide BacktoTopButton
    backToTopButton.style.display = "none";
}  
}

backToTopButton.addEventListener("click", backToTop);


function clicked(){
    document.getElementsByClassName('navbar')[0].style.display= "flex";
    document.getElementsByClassName('clicked')[0].style.display= "none";
    document.getElementsByClassName('close')[0].style.display= "flex";
}
function close(){
    document.getElementsByClassName('close')[0].style.color="red";
    document.getElementsByClassName('navbar')[0].style.display= "none";
    document.getElementsByClassName('clicked')[0].style.display= "flex";
    document.getElementsByClassName('close')[0].style.display= "none";
}