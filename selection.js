function Selection() {
    var userCart = document.forms["list1"]; // list1 is id of checkbox
    var allOptions = userCart.elements["cafe"]; //jinka naam cafe tha is list m daal dia


    var selectedOptions = []; //empty list
    allOptions.forEach((element) => {  //arrow fuction
        if (element.checked) {
            selectedOptions.push(element.value); //empty list m value aa gyi 
        }
    });
    var l = selectedOptions.length; //array ki length bta di
    if (l==0){
        alert('please select any option');
    }
    if (l > 1) {
        alert('please select any one cafe');
    }
    else {
        var n = selectedOptions[0];
        switch (n) {
            case "1": window.location.href = "https://www.cafecoffeeday.com/";
            break;
            case "2": window.location.href = "https://www.lachef.co.in/";
            break;
            case "3": window.location.href = "https://cafecomix.com/";
            break;
            case "4": window.location.href = "https://www.zomato.com/aligarh/ganpat-chat-and-fast-foods-aligarh-locality/order";
            break;
            case "5": window.location.href = "https://www.punjabdelight.com/";
            break;
            case "6": window.location.href = "https://www.punjabdelight.com/";
            break;
            case "7": window.location.href = "https://cafecomix.com/";
            break;
        }
    }
}
 

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}