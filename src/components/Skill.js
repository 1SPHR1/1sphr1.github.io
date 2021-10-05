import React, { Component }  from 'react';
import "../static/skill.css";
import { Link } from "react-router-dom";

const Skill = ({ skillObject }) => {
	return (
		<div className="skill">
			<div className="header">
				<h1>{skillObject.title}</h1>
				<h1>{skillObject.rate}</h1>
			</div>
			<div className="bar">
				<div
					style={{
						width: skillObject.rate,
					}}
				></div>
			</div>
		</div>
	);
};

export default Skill;
