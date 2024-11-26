import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        isShow: true,
        arrJobs: [
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
        ],
    };

    handleRemoveJob = (job) => {
        let currentJob = this.state.arrJobs.filter(item => item.id !== job.id);
        this.setState({
            arrJobs: currentJob
        })
    }
    addNewJob= (job) => {
        this.setState({
            arrJobs: [...this.state.arrJobs, job],
        })
    }

    handleShowData = () => {
        this.setState({
            isShow: !this.state.isShow,
        })
    }
    render() {
        return (
            <>
                <AddComponent addNewJob={this.addNewJob} />
                {this.state.isShow === false ? (
                    <button onClick={this.handleShowData}>Show</button>
                ) : (
                    <>
                        <ChildComponent
                            arrJobs={this.state.arrJobs}
                            handleRemoveJob={this.handleRemoveJob}
                        />
                        <button onClick={this.handleShowData}>Hide</button>
                    </>
                )}
            </>
        );
    }
}

export default MyComponent;
