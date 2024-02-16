import React, { Component }  from 'react';
import "./static/app.css";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	useParams,
} from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Mode from "./components/Mode";
import PostView from "./pages/PostView";
const endPoint = "https://slbd.ir/";
// const endPoint = "http://localhost:5000/";
function App() {
	// Theme State
	const [theme, setTheme] = useState(localStorage.getItem("theme"));

	// Posts state
	//const [posts, setPosts] = useState([]);

	// Projects state
	const [projects, setProjects] = useState([]);

	// Skills state
	const [skills, setSkills] = useState([]);

	// Menu State
	const [menu, setMenu] = useState("projects");
	// Functions

	const changeMode = (newTheme) => {
		document.body.style.transition = "0.5s";
		if (newTheme === "dark") {
			document.body.setAttribute("theme", "dark");
		} else {
			document.body.setAttribute("theme", "light");
		}
		document.body.style.transition = "0";
	};

	const toggleMode = () => {
		const newTheme = theme === "dark" ? "light" : "dark";
		setTheme(newTheme);
		localStorage.setItem("theme", newTheme);
		changeMode(newTheme);
	};

	const menuItemClick = (e) => {
		e.preventDefault();
		const menuItems = Array.from(document.querySelectorAll(".menu>div"));
		menuItems.forEach((item) => {
			item.classList.remove("active");
		});
		e.target.classList.add("active");
		setMenu(e.target.innerText.toLowerCase());
	};

	const getProjects = async () => {
		let response = await fetch(endPoint + "db.json");
		response = await response.json();
		// return response;
		return response.projects;
	};

	const getSkills = async () => {
		let response = await fetch(endPoint + "db.json");
		response = await response.json();
		// return response;
		return response.skills;
	};

	useEffect(() => {
		if (theme === "dark") {
			document.body.setAttribute("theme", "dark");
		} else {
			document.body.setAttribute("theme", "light");
		}
		const setProperties = async () => {
//			setPosts(await getPosts());
			setProjects(await getProjects());
			setSkills(await getSkills());
		};
		setProperties();
	}, []);

	return (
		<Router>
			<div className="main">
				<Mode mode={theme} toggleMode={toggleMode} />
				<Switch>

					<Route path="/">
						<Home
							projects={projects}
							skills={skills}
							//posts={posts}
							menu={menu}
							menuItemClick={menuItemClick}
						/>
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
