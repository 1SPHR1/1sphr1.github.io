import React, { Component }  from 'react';
import "../static/menu.css";
import MenuItem from "./MenuItem";
//import Posts from "./Posts";
import Projects from "./Projects";
import Skills from "./Skills";

const Menu = ({ menu, menuItemClick, projects, skills }) => {
	const showContext = () => {
		if (menu === "projects") {
			return <Projects projects={projects} />;
		} else if (menu === "skills") {
			return <Skills skills={skills} />;
		}
	};
	return (
		<div className="right">
			<div className="menu">
				<MenuItem
					active={false}
					title="Projects"
					menuItemClick={menuItemClick}
				/>
				<MenuItem
					active={false}
					title="Skills"
					menuItemClick={menuItemClick}
				/>
			</div>
			{showContext()}
		</div>
	);
};

export default Menu;
