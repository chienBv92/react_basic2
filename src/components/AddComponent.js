import React, {Component} from "react";

class AddComponent extends Component {
    state = {
        id: '',
        title: "",
        salary: '',

    }
    handleSubmit = () => {
        if (!this.state.title || !this.state.salary) {
            alert('Please input data')
            return;
        }
        let job = {
            id: Math.floor(Math.random() * 10000),
            title: this.state.title,
            salary: this.state.salary
        }
        this.props.addJob(job);

        this.setState({
            title: '',
            salary: ''
        })
    }

    render() {
        return (
            <div>
                <label>Title</label>
                <input value={this.state.title} onChange={(event) => this.handleOnchangeTitle(event)}/>
                <br/>
                <label>Salary</label>
                <input value={this.state.salary} onChange={(event) => this.handleOnchangeSalary(event)}/>
                <br/>
                <button onClick={() => this.handleSubmit()}>Submit</button>
            </div>
        )
    }

    handleOnchangeTitle(event) {
        this.setState({
            title: event.target.value
        })
    }

    handleOnchangeSalary(event) {
        this.setState({
            salary: event.target.value
        })
    }
}

export default AddComponent;
