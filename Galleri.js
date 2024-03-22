import React from "react";
import eb11 from "./foto/eb11.png"
import em22 from "./foto/em22.png"
import em33 from "./foto/em33.png"
import em44 from "./foto/em44.png"
import em55 from "./foto/em55.png"
import em66 from "./foto/em66.png"

class Galleri extends React.Component{
	render(){
	return (
	<div className="banner"> 
		<h3>Galleri</h3>
		<div className="content_area">
		<p> Njut av några bilder på hur det ser ut hos oss!</p>
		<p>Foton tagna av Lars Dhalin.</p>
		<div className="content_area_box">
		<div className="photoalbum">
			<img id="div1" src={eb11} alt="cafebild1"  height="300" width="300" /> 
			<img id="div2" src={em22} alt="cafebild2"  height="300" width="300" /> 	
			<img id="div3" src={em33} alt="cafebild3" height="300" width="300" />
			<img id="div4" src={em44} alt="cafebild4"  height="300" width="300" />	
			<img id="div5" src={em55} alt="cafebild5" height="300" width="300" /> 
			<img id="div6" src={em66} alt="cafebild6"  height="300" width="300" />
		</div>
		</div>	
		</div>
	</div>
	)
	}
}
export default Galleri;