function Orphan(){
    window.location.href='orphan.html';
}

function sheltor(){
    window.location.href='Shelterhome.html';
}

function ngo(){
    window.location.href='Ngo.html';
}


function funn(){
    var no_of_plate = (document.getElementById("plate").value);
    var n = parseInt(no_of_plate);

    if (n<=20){
        Orphan();
    }
    else if (n>20 && n<=50){
        sheltor();
    }
    else {
        ngo();

    }
}



function getLocation() {
    var x = document.getElementById("demo");
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

 function showPosition(position) {
    var x = document.getElementById("demo");
  x.innerHTML = "Latitude: " + position.coords.latitude + // Js m likha hua html m print krane k liye
  "<br>Longitude: " + position.coords.longitude;    //x m position aa gyi where to show
}