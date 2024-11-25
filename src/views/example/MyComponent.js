import React from "react";
import ChildComponent from "./ChildComponent";

class MyComponent extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        isShow: true,
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

    handleShowData = (e) => {
        this.setState({
            isShow: !this.state.isShow,
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
                {this.state.isShow === false ? (
                    <button onClick={this.handleShowData}>Show</button>
                ) : (
                    <>
                        <ChildComponent
                            name={"first component"}
                            arrJobs={[
                                {
                                    id: 1,
                                    name: "Thành Nhan",
                                    job: "IT",
                                    salary: "500",
                                },
                                {
                                    id: 2,
                                    name: "Thành Nhan",
                                    job: "IT",
                                    salary: "1500",
                                },
                                {
                                    id: 3,
                                    name: "Thành Nhan",
                                    job: "IT",
                                    salary: "4500",
                                },
                                {
                                    id: 4,
                                    name: "Thành Nhan",
                                    job: "IT",
                                    salary: "5500",
                                },
                            ]}
                        />
                        <button onClick={this.handleShowData}>Hide</button>
                    </>
                )}
            </>
        );
    }
}

export default MyComponent;
