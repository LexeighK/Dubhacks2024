var slider = document.getElementById("myRange");
var output = document.getElementById("value");

// prints current value of slider
output.innerHTML = slider.value;

// another way to change value when slider is moved
// slider.oninput = function() {
//     output.innerHTML = this.value;
// }

slider.addEventListener("mousemove", function() {
    // moves color on slider (changes css)
    var x = slider.value;
    var color = 'linear-gradient(90deg, rgb(117, 252,117)' + x + '%, rgb(214, 214, 214)' + x + '%)';
    slider.style.background = color;

    // changes value displayed
    output.innerHTML = this.value;
})