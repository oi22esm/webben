import React, {useState} from "react";
import './App.css';

function Likebutton() {
	const [likes, setLikes] = useState(0);
	const [liked, setLiked] = useState(false);
	return (
		<button className={`like-button ${liked ? 'liked' : ''}`} 
			onClick={() => {
				setLikes(likes +1)
				setLiked(true);
			}}>
			Antal likes: {likes}
		</button>
		);

} export default Likebutton;