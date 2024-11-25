import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        isShow: true,
    };

    render() {
        return (
            <>
                <AddComponent />
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
