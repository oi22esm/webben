import React from "react";

class Omdome extends React.Component{
	render(){
	return (
		<div class="banner"> 
		<h3>Omdöme</h3>
		<div class="content_area">
			<p> Upptäck Emma-Britas Cafe & Våffelstuga genom ögonen på 
				våra gäster. Läs våra omdömen och dyk in i vår atmosfär av
				god utsikt, goda bakelser m.m. </p>
			<p> Har du besökt oss? Lämna gärna ett omdöme här nedan!</p>
			<div class="content_area_box">
			<div class="mellanbox">
				<form action="skicka" method="post"></form>
					<label for="name"> Ditt namn: </label>
					<input type="text" onfocus="func(this)" onblur="func_blur(this)" id="name" name="name" />
					<br></br>
					<br></br>
					<label for="mail"> E-post: </label>
					<input type="email" onfocus="func(this)" onblur="func_blur(this)" id="email" name="email" />
					<br></br>
					<br></br>
					<label for="name"> Skriv din upplevelse här: </label>
					<textarea id="opinion" onfocus="func(this)" onblur="func_blur(this)" name="opinion"></textarea>
					<br></br>
					<br></br>
					<input type="submit" value="Skicka" />
			</div>
			</div>
		</div>
	</div>	
	)
	}
}
export default Omdome;