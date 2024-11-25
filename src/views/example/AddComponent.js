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
        console.log(">>>>chekc data: ", this.state);
        
    }

    render() {
        return (
            <form>
                <label>Title Job</label>
                <input
                    type="text"
                    value={this.state.titleJob}
                    onChange={this.handleTitleJob}
                />
                <label>Salary</label>
                <input
                    type="text"
                    value={this.state.salary}
                    onChange={this.handleSalary}
                />

                <button type="submit" onClick={this.handleSubmitForm}>
                    Submit
                </button>
            </form>
        );
    }
}

export default AddComponent;
