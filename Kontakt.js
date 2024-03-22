import React from "react";
import { NavLink } from "react-router-dom";

class Kontakt extends React.Component{
	render(){
	return (
		<div className="banner"> 
			<h3>Kontakt</h3>
		<div className="content_area_box">
		<div className="storbox">
			<h4> Telefonnummer: </h4>
			<p> "Under produktion"</p>
			<h4> Address: </h4>
			<p> Övre Toppvägen 26 </p>
			<p> 846 94 Vemdalen </p>
			<p> Svergie </p>
			<p> Klicka på rutan nedanför för att komma till vägbskrivning!</p>
			<div className="box">
				<NavLink to="/Vagbe" activeClassName="active"><p>Vägbeskrivning</p></NavLink>
			</div>
		</div>
	</div>
	</div>
	)
	}
}
export default Kontakt;