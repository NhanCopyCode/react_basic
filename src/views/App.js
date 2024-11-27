// import './App.scss';
import FormAddTodo from "./todos/FormAddTodo";
import "../styles/todo.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "./navigations/Nav";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./example/Home";
import MyComponent from './example/MyComponent';

function App() {
    return (
        <Router>
            <div className="App">
                <Nav />
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/form-todo">
                        <FormAddTodo />
                    </Route>
                    <Route path="/component">
                        <MyComponent />
                    </Route>
                </Switch>
                <ToastContainer />
            </div>
        </Router>
    );
}

export default App;
