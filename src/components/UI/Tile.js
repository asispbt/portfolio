import React from "react";


const Tile = ({title, mediumTitle, desc}) => {
  return (
     <div style={{background: "#fff", padding: "30px", margin: "30px 0" }}>
        <p className="primaryColor font-14 bold-600 mtb-10 uppercase" style={{textAlign: "center"}}>{title}</p>
        <p className="textColor font-14 bold-500 mtb-10" style={{textAlign: "center"}}>{mediumTitle}</p>
        <p className="grayP font-12 mtb-10" style={{textAlign: "center"}}>{desc}</p>
     </div>
  );
};

export default Tile;