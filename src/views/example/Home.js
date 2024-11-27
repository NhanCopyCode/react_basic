import React from "react";
import { withRouter } from "react-router";

class Home extends React.Component {
    componentDidMount = () => {
    };
    render() {
        console.log(">>>>> render", this.props);
        return <div>Home</div>;
    }
}

export default withRouter(Home);
