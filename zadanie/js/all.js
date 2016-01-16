$( document ).ready(function() {
							 
function Graj() {
    var x = document.createElement("AUDIO");
	x.setAttribute("src","imperial_march.mp3");
	x.play();
}


$('form').submit(function(event){
var ileKliknietych = $("input[name=character]:checked").length;
if(ileKliknietych>0 && !$("#checkbox_yoda").is(':checked')){
    event.preventDefault();
	Graj();
 }
    });

});
