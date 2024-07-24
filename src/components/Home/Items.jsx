import React, { useState } from "react";

// Details component
const Details = ({ details }) => {
  const detailsStyle = {
    position: "absolute",
    top: "110px",
    left: "0",
    width: "200px",
    background: "#fff",
    border: "1px solid #ccc",
    padding: "10px",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
  };

  return <div style={detailsStyle}>{details}</div>;
};

const icons = [
  { title: "Clean / holistic",
    details: "Details about Clean / holistic" },
  { title: "Co-ciricul",
    details: "Details about Co-ciricul" },
  { title: "Dedicated teacher", 
    details: "Details about Dedicated teacher" },
  {
    title: "NCC/scouts & guides",
    details: "Details about NCC/scouts & guides",
  },
  { title: "Drinking water", 
    details: "Details about Drinking water" },
  { title: "Auditorium", 
    details: "Details about Auditorium" },
  { title: "Parking", 
    details: "Details about Parking" },
  { title: "Canteen", 
    details: "Details about Canteen" },
  { title: "Hostel", 
    details: "Details about Hostel" },
  { title: "Smart classes", 
    details: "Details about Smart classes" },
  { title: "Science labs", 
    details: "Details about Science labs" },
  { title: "Comp labs", 
    details: "Details about Comp labs" },
];

const CircleIcon = ({ title, details }) => {
  const [hover, setHover] = useState(false);

  const circleStyle = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    background: "#ddd",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    textAlign: "center",
    position: "relative",
    margin: "10px",
  };

  return (
    <div
      style={circleStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div>{title} </div>
      {hover && <Details details={details} />}
    </div>
  );
};

const Items = () => {
  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    padding: "20px",
  };

  return (
    <div style={containerStyle}>
      {icons.map((icon, index) => (
        <CircleIcon key={index} title={icon.title} details={icon.details} />
      ))}
    </div>
  );
};

export default Items;
