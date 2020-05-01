import React, { Component } from "react";
import "./App.css";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
    state = {
        username: "enter username",
    };

    usernameHandler = (event) => {
        this.setState({
            username: event.target.value,
        });
    };

    render() {
        return (
            <div className="App">
                <UserInput
                    changed={this.usernameHandler}
                    curentname={this.state.username}
                />
                <div className="flex">
                    <UserOutput username={this.state.username} />
                    <UserOutput username={this.state.username} />
                    <UserOutput username={this.state.username} />
                </div>
            </div>
        );
    }
}

export default App;
