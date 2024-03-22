import React from "react";
import { NavLink } from "react-router-dom";
import vvag2 from "./foto/vvag2.png";

class Vagbe extends React.Component{
	render(){
	return (
		<div className="banner"> 
		<h3>Vägbeskrivning</h3>
		<div className="content_area">
			<img src={vvag2} alt="Vägbeskrivning" height="400" width="800"/> 
		<p>Svårt att hitta hit? Klicka på rutan nedanför så kommer ni till google maps
			som hjälper er! Vi syns snart! </p>
	</div>
	<div className="content_area_box">
	<div className="box">
		<NavLink to="https://www.google.com/maps/dir//Emma-Brita's+Caf%C3%A9+%26+V%C3%A5ffelstuga/@62.4941439,14.0756274,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x466f18045c255e77:0xce5eca6a1e84c15e!2m2!1d14.1580269!2d62.4941682?entry=ttu" activeClassName="active">
			<p>Klicka här</p> </NavLink>
		</div>
		<hr></hr>
	</div>
	</div>
	)
	}
}
export default Vagbe;