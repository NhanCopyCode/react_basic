import React from "react";

class ChildComponent extends React.Component {
    state = {
        firstName: "",
        lastName: "",
    };

    handleFirstName = (event) => {
        this.setState({
            firstName: event.target.value,
        });
    };

    handleLastName = (event) => {
        this.setState({
            lastName: event.target.value,
        });
    };
    render() {
        return (
            <>
               <h1>This is child component : {this.props.name}</h1>
            </>
        );
    }
}

export default ChildComponent;
