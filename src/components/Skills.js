import React, { Component }  from 'react';
import "../static/skills.css";
import Skill from "./Skill";
const Skills = ({ skills }) => {
	return (
		<div className="skills">
			{skills.map((element) => (
				<Skill skillObject={element} key={element.id} />
			))}
		</div>
	);
};

export default Skills;
