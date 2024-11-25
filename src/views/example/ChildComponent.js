import React from "react";

class ChildComponent extends React.Component {
    state = {
        isShow: true,
    }
  
    render() {
        const { arrJobs } = this.props;
        console.log("arr job", arrJobs);
        return (
            <>
                <p>This is child component : {this.props.name}</p>
                {arrJobs.map((item, index) => {
                    if (item.salary >= 2000) {
                        return (
                            <div key={item.id}>
                                This is {item.name} - and his salary{" "}
                                {item.salary}
                            </div>
                        );
                    }
                })}
            </>
        );
    }
}

export default ChildComponent;
