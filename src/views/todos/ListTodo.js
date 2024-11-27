import React from "react";

class ListTodo extends React.Component {
    state = {
        nameTodo: "",
        objTodo: "",
    };
    handleCompleteTodo = (id) => {
        this.props.handleCheckTodo(id);
        // console.log(id);
    };

    handleRemoveTodo = (id) => {
        this.props.handleRemoveTodo(id);
    };

    handleEditTodo = (todo) => {
        console.log(todo);
        this.setState({
            nameTodo: todo.name,
            objTodo: { ...todo },
        });
    };
    handleUpdateTodo = (e) => {
        this.setState({
            nameTodo: e.target.value,
        });
    };

    handleSaveTodo = (todo) => {
        const currentTodo = {
            id: todo.id,
            name: this.state.nameTodo,
        }
        this.props.handleSaveTodo(currentTodo);
        this.setState({
            objTodo: ''
        })
    };
    render() {
        const { listTodo } = this.props;
        return (
            <div className="list_todos">
                <ul>
                    {listTodo?.map((item, index) => {
                        return (
                            <li
                                key={item.id}
                                className="d-flex align-items-center my-3 justify-content-between"
                            >
                                <div className="todo__content">
                                    {this.state.objTodo === 0 ? (
                                        <label htmlFor={item.id}>
                                            {item.name}
                                        </label>
                                    ) : this.state.objTodo.id === item.id ? (
                                        <input
                                            type="text"
                                            value={this.state.nameTodo}
                                            onChange={(e) =>
                                                this.handleUpdateTodo(e)
                                            }
                                        ></input>
                                    ) : (
                                        <label htmlFor={item.id}>
                                            {item.name}
                                        </label>
                                    )}
                                </div>
                                <div>
                                    {this.state.objTodo.length === 0 ? (
                                        <button
                                            className="btn btn-warning"
                                            onClick={() =>
                                                this.handleEditTodo(item)
                                            }
                                        >
                                            Edit
                                        </button>
                                    ) : this.state.objTodo.id === item.id ? (
                                        <button
                                            className="btn btn-warning"
                                            onClick={() =>
                                                this.handleSaveTodo(item)
                                            }
                                        >
                                            Save
                                        </button>
                                    ) : (
                                        <button
                                            className="btn btn-warning"
                                            onClick={() =>
                                                this.handleEditTodo(item)
                                            }
                                        >
                                            Edit
                                        </button>
                                    )}
                                    <button
                                        className="btn btn-danger"
                                        onClick={() =>
                                            this.handleRemoveTodo(item.id)
                                        }
                                    >
                                        X
                                    </button>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default ListTodo;
