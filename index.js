


const tarjeta = document.querySelector(".tarjeta");



function mouseDown() {
    console.log('mouseDown')
    document.getElementById("pantalla").onmousemove = function(event) {myFunction(event)};
    function myFunction(e) {
        var x = e.clientX;
        var y = e.clientY;
        console.log("Coordinates: (" + x + "," + y + ")")
        tarjeta.style.left = x-200 + "px";
        tarjeta.style.top = y-280 + "px";
    }
}

function mouseUp() {
    console.log('mouseUp')
    // document.getElementById("pantalla").onmousemove = function(event) {myFunction(event)};
    document.getElementById("pantalla").onmousemove = function(event) {myFunction(event)};
    function myFunction(e) {

    }
}

