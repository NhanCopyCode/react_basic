import React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";

class Home extends React.Component {
    componentDidMount = () => {};
    handleDeleteUser(user) {
        this.props.deleteUserRedux(user);
        console.log(this.props);
    }

    handleAddNewUser() {
        this.props.createUserRedux();
    }
    render() {
        const listUsers = this.props.dataRedux;

        return (
            <div>
                Home
                {listUsers &&
                    listUsers.length > 0 &&
                    listUsers.map((item, index) => {
                        return (
                            <div className="mt-3" key={item.id}>
                                {item.id} - {item.name}
                                <button
                                    className="btn btn-danger ms-3"
                                    onClick={() => this.handleDeleteUser(item)}
                                >
                                    Delete User
                                </button>
                            </div>
                        );
                    })}
                <button className="btn btn-primary" onClick={() => this.handleAddNewUser()}>Add new User</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        dataRedux: state.users,
        stateRedux: state,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (user) =>
            dispatch({ type: "DELETE_USER", payload: user }),
        createUserRedux: () => dispatch({type: 'CREATE_USER'})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));
