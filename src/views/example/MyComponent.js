import React from "react";

class MyComponent extends React.Component {
    state = {
        name:"THành Nhân state",
    }
    render() {
        const name = "Thành Nhân";
        return <h1>Hello world, this is class component in reactjs { this.state.name }</h1>;
    }
}

export default MyComponent;
