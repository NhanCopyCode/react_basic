import React from "react";
import ChildComponent from "./ChildComponent";

class MyComponent extends React.Component {
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
                <form>
                    <label>First name</label>
                    <input
                        type="text"
                        value={this.state.firstName}
                        onChange={this.handleFirstName}
                    />
                    <label>Last name</label>
                    <input
                        type="text"
                        value={this.state.lastName}
                        onChange={this.handleLastName}
                    />

                    <button type="submit">Submit</button>
                </form>

                <ChildComponent name="first component" />
                <ChildComponent name="second component" />
                <ChildComponent name="third component" />
            </>
        );
    }
}

export default MyComponent;
