import React from "react";

const SmallHeading = ({text}) => {
    return(
        <p className="uppercase font-14 bold-600 primaryColor ls-1 mtb-10 text-center" style={{fontSize: '20px'}}> {text} </p>
    );
};

export default SmallHeading;