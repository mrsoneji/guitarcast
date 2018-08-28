window.onload = function() {

setInterval(function() {

    document.getElementById('E').style.backgroundColor = "orange";
}, 5000)

    // Layout a specific scale
var aPhrygian = Fretboard({whedre:'.fb-container'});
aPhrygian.scale("c minor-pentatonic");

}