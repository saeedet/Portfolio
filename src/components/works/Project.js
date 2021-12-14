import React from "react";

const Project = ({ url, name, image, techs, description }) => {
  return (
    <div className="project">
      <div className="project__image">
        <img src={image} alt="" />
      </div>
      <div>
        <div>{name}</div>
        <div>{techs}</div>
        <div>{description}</div>
        <a href={url}>Link to {name} Website</a>
      </div>
    </div>
  );
};

export default Project;
