import React from "react";

class AddComponent extends React.Component {
    state = {
        titleJob: "",
        salary: "",
    };
    handleTitleJob = (event) => {
        this.setState({
            titleJob: event.target.value,
        });
    };

    handleSalary = (event) => {
        this.setState({
            salary: event.target.value,
        });
    };

    handleSubmitForm = (e) => {
        e.preventDefault();
        if(this.state.titleJob === '' || this.state.salary === '') {
            alert('No data to add');
            return;
        }
        const newJob = {
            id: Math.floor(Math.random() * 10000),
            name: "Thành Nhân " + Math.floor(Math.random() * 1000),
            job: this.state.titleJob,
            salary: this.state.salary,
        };
        this.props.addNewJob(newJob);

        this.setState({
            titleJob: '',
            salary: '',
        })
    }

    render() {
        return (
            <form>
                <label>Title Job</label>
                <input
                    type="text"
                    value={this.state.titleJob}
                    onChange={(e) => this.handleTitleJob(e)}
                />
                <label>Salary</label>
                <input
                    type="text"
                    value={this.state.salary}
                    onChange={(e) => this.handleSalary(e)}
                />

                <button type="submit" onClick={(e) => this.handleSubmitForm(e)}>
                    Submit
                </button>
            </form>
        );
    }
}

export default AddComponent;
