// import './App.scss';
import FormAddTodo from "./todos/FormAddTodo";
import "../styles/todo.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "./navigations/Nav";


function App() {
    return (
        <div className="App">
            <Nav />
            <FormAddTodo />
            <ToastContainer />
        </div>
    );
}

export default App;
