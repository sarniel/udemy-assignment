import React, { Component } from "react";

const useroutput = (props) => {
    return (
        <div className="card">
            <h2>User output</h2>
            <p>username: {props.username}</p>
        </div>
    );
};

export default useroutput;
