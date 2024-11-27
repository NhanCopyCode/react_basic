import React from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
class DetailUser extends React.Component {
    state = {
        user: {},
    };
    async componentDidMount() {
        const user_id = this.props.match.params.id;
        const res = await axios.get(`https://reqres.in/api/users/${user_id}`);
        this.setState({
            user: res && res.data && res.data.data ? res.data.data : {},
        });
    }
    handleBackUrl = (e) => {
        this.props.history.push('/user');
    }

    render() {
        const { user } = this.state;
        return (
            <>
                <button
                    className="btn btn-primary"
                    onClick={this.handleBackUrl}
                >
                    Back
                </button>
                <div>This is user: {user.id}</div>
                <div>
                    Hello my name is: {user.first_name} {user.last_name}
                </div>
                <div>My email is: {user.email}</div>
                <div>
                    And this is my face:
                    <img src={user.avatar} />
                </div>
            </>
        );
    }
}

export default withRouter(DetailUser);