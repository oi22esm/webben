
window.onload = function(){
	function_random();
}
function function_random(){
	number = Math.random();
	// de tre kategorierna, kalldryck, varmddryck och våfflor
	mult_number = 3 * number;
	whole_number = Math.floor(mult_number);

	if(whole_number == 0){
		bild.src = "varmdryck.png";
		document.getElementById("bild").addEventListener("mouseenter", function_random);
	}
	else if(whole_number == 1){
		bild.src = "kalldryck.png";
		document.getElementById("bild").addEventListener("mouseenter", function_random);
	}
	else if(whole_number == 2){
		bild.src = "vafflar.png";
		document.getElementById("bild").addEventListener("mouseenter", function_random);
	}
	else{
		function_random();
	}
}