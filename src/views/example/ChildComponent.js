import React from "react";

class ChildComponent extends React.Component {
    state = {
        isShow: true,
    };

    handleRemoveJob = (job) => {
        this.props.handleRemoveJob(job);
    };
    render() {
        const { arrJobs } = this.props;
        console.log("arr job", this.props);
        return (
            <>
                {arrJobs.map((item, index) => {
                    return (
                        <div key={item.id}>
                            This is {item.name} - and his salary {item.salary}
                            <button onClick={() => this.handleRemoveJob(item)}>
                                Remove job
                            </button>
                        </div>
                    );
                })}
            </>
        );
    }
}

export default ChildComponent;
