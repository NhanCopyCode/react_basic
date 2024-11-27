import React from "react";
import axios from "axios";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

class ListUser extends React.Component {
    state = {
        listUsers: [],
    };
    async componentDidMount() {
        const res = await axios.get("https://reqres.in/api/users?page=1");
        this.setState({
            listUsers: res && res.data && res.data.data ? res.data.data : [],
        });
    }
    handleDisplayDetailUser = (user) => {
        console.log('>>>>>check user', user);
        
        if(user) {
            this.props.history.push(`/user/${user.id}`);
        }
    }
    render() {
        const { listUsers } = this.state;
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Email</th>
                            <th scope="col">Avatar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listUsers &&
                            listUsers.length > 0 &&
                            listUsers.map((item, index) => {
                                return (
                                    <tr
                                        key={item.id}
                                        onClick={() =>
                                            this.handleDisplayDetailUser(item)
                                        }
                                    >
                                        <th scope="row">{index + 1}</th>
                                        <td>{item.first_name}</td>
                                        <td>{item.last_name}</td>
                                        <td>{item.email}</td>
                                        <td>
                                            <img src={item.avatar} />
                                        </td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default withRouter(ListUser);
