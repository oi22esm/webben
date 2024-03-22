import React from "react";
import { NavLink } from "react-router-dom";

class Footer extends React.Component{
	render(){
		return (
			<div className="footer"> 
			<hr></hr>
			<div className="navbar1">
				<ul className="lista">
					<li> <NavLink to="/" exact activeClassName="active"> Startsida</NavLink></li>
					<li> <NavLink to="/meny" activeClassName="active" >Meny</NavLink></li>
					<li> <NavLink to="/vagbe" activeClassName="active">Vägbeskrivning</NavLink></li>
					<li> <NavLink to="/omdome" activeClassName="active">Omdöme</NavLink></li>
					<li> <NavLink to="/galleri" activeClassName="active"> Galleri</NavLink></li>
					<li> <NavLink to="/kontakt" activeClassName="active">Kontakt</NavLink></li>
				</ul>
			</div>
		</div>
		)
	}
}
export default Footer;