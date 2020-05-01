import React, { Component } from "react";

const userinput = (props) => {
    const inputstyle = {
        border: "1px solid red",
    };
    return (
        <div className="card">
            <h2>Hi I'm user Input</h2>
            <input
                style={inputstyle}
                type="text"
                onChange={props.changed}
                value={props.curentname}
            />
        </div>
    );
};

export default userinput;
