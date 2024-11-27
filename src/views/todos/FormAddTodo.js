import React from "react";
import ListTodo from "./ListTodo";
import { ToastContainer, toast } from "react-toastify";


class FormAddTodo extends React.Component {
    state = {
        nameTodo: "",
        listTodos: [
            {
                id: Math.floor(Math.random() * 1000),
                name: "Làm việc nhà",
                isComplete: false,
            },
            {
                id: Math.floor(Math.random() * 1000),
                name: "Làm việc nhà 1",
                isComplete: false,
            },
            {
                id: Math.floor(Math.random() * 1000),
                name: "Làm việc nhà 2",
                isComplete: false,
            },
            {
                id: Math.floor(Math.random() * 1000),
                name: "Làm việc nhà 3",
                isComplete: false,
            },
        ],
    };

    handleCheckTodo = (id) => {
        let listTodoCurrent = [...this.state.listTodos].map((item, index) => {
            if (item.id === id) {
                item.isComplete = !item.isComplete;
            }
            return item;
        });
        this.setState({
            listTodos: [...listTodoCurrent],
        });
    };

    handleName = (e) => {
        this.setState({
            nameTodo: e.target.value,
        });
    };
    handleAddItemToListTodo = (e) => {
        e.preventDefault();
        if(this.state.nameTodo === '') return alert('No data available!!!');
        const newTodo = {
            id: Math.floor(Math.random() * 1000),
            name: this.state.nameTodo,
            isComplete: false
        }
        this.setState({
            nameTodo: '',
            listTodos: [...this.state.listTodos, newTodo],
        });
        toast.success("You can provide any string", {
        });
    };

    handleRemoveTodo = (id) => {
        const currentTodo = this.state.listTodos.filter((item, index) => {
            return item.id !== id;
        })
        this.setState({
            listTodos: [...currentTodo],
        })
        toast.info('Delete successfully!!!');
    }
    handleSaveTodo = (todo) => {
        const listTodos = this.state.listTodos;
        const objIndex = listTodos.findIndex((obj) => obj.id === todo.id);

        //Log object to Console.
        console.log("Before update: ", listTodos[objIndex]);

        //Update object's name property.
        listTodos[objIndex].name = todo.name;
        console.log("After update: ", listTodos);
        this.setState({
            listTodos: [...listTodos]
        })
        toast.success('Update successfully!!!');
    }
    render() {
        return (
            <div id="todo-app">
                <header className="text-center">Nhan's todo app</header>
                <form className="form-group position-relative form-add-new-todo mt-4">
                    <input
                        className="form-control"
                        placeholder="Add new..."
                        value={this.state.nameTodo}
                        onChange={(e) => this.handleName(e)}
                    />
                    <button
                        type="submit"
                        className="btn btn-primary position-absolute"
                        onClick={(e) => this.handleAddItemToListTodo(e)}
                    >
                        ADD
                    </button>
                </form>

                <ListTodo
                    listTodo={this.state.listTodos}
                    handleCheckTodo={this.handleCheckTodo}
                    handleRemoveTodo={this.handleRemoveTodo}
                    handleSaveTodo={this.handleSaveTodo}
                />
            </div>
        );
    }
}

export default FormAddTodo;
