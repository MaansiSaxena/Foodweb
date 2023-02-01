function Selection() {
    var userCart = document.forms["occass"]; // form se data get
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
        alert('please select your occasion');
    }
    else {
        var n = selectedOptions[0];
        switch (n) {
            case "1": var checkBox = document.getElementById("resto1"); //checkbox ki id
            var text = document.getElementById("fresher"); //fresher k p tag ki id
            if (checkBox.checked == true){
                text.style.display = "block"; //it will show when display from style will change from none to block
            } else {
                text.style.display = "none"; // kuch nhi 
            }
            break;


            case "2":var checkBox = document.getElementById("resto2");
            var text = document.getElementById("bday");
            if (checkBox.checked == true){
                text.style.display = "block";
            } else {
                text.style.display = "none";
            }
            break;


            case "3": var checkBox = document.getElementById("resto3");
            var text = document.getElementById("fwell");
            if (checkBox.checked == true){
                text.style.display = "block";
            } else {
                text.style.display = "none";
            }
            break;
        }
    }
}
 