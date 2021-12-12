import React, {Component} from "react";
import ChildLogin from "./ChildLogin";
import AddComponent from "./AddComponent";

class Login extends Component {
    state = {
        firstName: "chien",
        lastName: "",
        jobs: [
            {
                id: 1,
                title: 'Developer',
                salary: '500$'
            },
            {
                id: 2,
                title: 'Tester',
                salary: '300$'
            },
            {
                id: 3,
                title: 'Manager',
                salary: '1000$'
            }
        ]

    }
    handleSubmit = () => {
        console.log(this.state)
    }

    addJob = (job) => {
        this.setState({
            jobs: [...this.state.jobs, job]
        })

    }

    render() {
        return (
            <div>
                <AddComponent addJob={this.addJob}></AddComponent>
                <ChildLogin jobs={this.state.jobs}></ChildLogin>
            </div>
        )
    }

    handleOnchangeFirstName(event) {
        this.setState({
            firstName: event.target.value
        })
    }



}

export default Login;
