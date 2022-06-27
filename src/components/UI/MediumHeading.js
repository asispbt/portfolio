import React from "react";

const MediumHeading = ({text, style}) => {
    return(
        <p className="font-25 capitalize ls-1 textColor bold-700 text-center" style={{style}} >
        {text}
      </p>
    );
};

export default MediumHeading;