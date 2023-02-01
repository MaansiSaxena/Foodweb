window.onload = () => {
    
    if(localStorage.getItem("remaining seats") !== null && localStorage.getItem("remaining seats") != 0)
        total_seat = localStorage.getItem("remaining seats");
    else
    {
        total_seat = 50;
        localStorage.setItem('remaining seats', total_seat);
    }
    const seatVal = document.getElementById("total_seats");
    seatVal.innerText = total_seat;

}

function myFunction3(){
    var seat = (document.getElementById("seats").value);
    if(localStorage.getItem("remaining seats") !== null)
        total_seat = localStorage.getItem("remaining seats");
    else
        total_seat = 50;
    console.log(total_seat);
    var remaining_seat = 0;
    if(seat!=0){
        if(seat<=total_seat){
            var sub = parseInt(seat);
            remaining_seat = total_seat - sub;
            localStorage.setItem('remaining seats', remaining_seat);
            total_seat = localStorage.getItem('remaining seats');
            var text = "Total available seats are: " + remaining_seat;
            document.getElementById("mes").innerHTML = text;
            console.log(total_seat);
        }
        else{
            alert("Seats are not available.");
        }
    }    
    else{
        alert("Please enter no. of reqired seats first");
    }
}