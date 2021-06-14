//Message appear when Box 1 is clicked
var message1 = document.createElement("p");

document.getElementById("box1").addEventListener("click",
    function() {
        message1.innerHTML = "Oooh - so close, but no cigar";
        document.getElementById("new_p").appendChild(message1);
    }, false
);


//Message appear when Box 2 is clicked
var message2 = document.createElement("p");

document.getElementById("box2").addEventListener("click",
    function() {
        message2.innerHTML = "DING DING DING - We have a winner";
        document.getElementById("new_p2").appendChild(message2);
    }, false
);


//Message appear when Box 3 is clicked
var message3 = document.createElement("p");

document.getElementById("box3").addEventListener("click",
    function() {
        message3.innerHTML = "Ooops, better luck next time";
        document.getElementById("new_p3").appendChild(message3);
    }, false
);


//Button appears when any of the boxes are clicked
var message4 = document.createElement("button");

document.getElementById("box4").addEventListener("click",
    function() {
        message4.innerHTML = "<a id='new_link' href='index.html'>Start Over</a>";
        document.getElementById("new_p4").appendChild(message4);
    }, false
);