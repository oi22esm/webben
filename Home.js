import React from "react";
import film1 from "./foto/film1.mp4";
import Likebutton from "../Likebutton";

class Home extends React.Component{
	render(){
	return <div className="content_area">
	<h3>Välkommen till Emma-Britas Cafe & Våffelstuga!</h3>
	<h3> Öppetider</h3>
	<div style={{display: "blcok", textAlign: "center"}}>
	<table style={{margin: "auto"}}>
		<tr>
			<th>Måndag</th>
			<th>10:00-16:00</th>
		</tr>
		<tr>
			<th>Tisdag</th>
			<th>10:00-16:00</th>
		</tr>
		<tr>
			<th>Onsdag</th>
			<th>10:00-16:00</th>
		</tr>
		<tr>
			<th>Torsdag</th>
			<th>10:00-16:00</th>
		</tr>
		<tr>
			<th>Fredag</th>
			<th>10:00-16:00</th>
		</tr>
		<tr>
			<th>Lördag</th>
			<th>10:00-16:00</th>
		</tr>
		<tr>
			<th>Söndag</th>
			<th>10:00-16:00</th>
		</tr>
	</table>
	</div>
	<div id="videon"> 
		<video id="video" controls source src={film1} width="400" height="400" type="video/mp4"></video>
	</div>
	<p>Gillade du video? Ge oss en like!</p>
		<Likebutton />
	</div>;
	}

}

export default Home;