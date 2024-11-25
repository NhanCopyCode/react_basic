import React from "react";

class MyComponent extends React.Component {
    state = {
        name: "THành Nhân state",
        age: 15,
    };
    handleClickButton = (event) => {
        alert("click me");
    };

    handleOnChange = (event) => {
        this.setState({
            name: event.target.value,
        })
    }
    render() {
        return (
            <>
                <h1>
                    Hello world, this is class component in reactjs
                    {this.state.name}
                </h1>
                <input
                    value={this.state.name}
                    type="text"
                    onChange={(event) => this.handleOnChange(event)}
                />
                <button onClick={this.handleOnChange}>
                    Click me
                </button>
            </>
        );
    }
}

export default MyComponent;
