import React, {Component} from "react";

class ChildLogin extends Component {
    state = {
        isShow: false
    }
    handleSubmit = () => {
        console.log(this.state)
    }

    render() {
        let {jobs} = this.props;
        let {isShow} = this.state;
        return (
            <>
                {isShow == false ?
                    <div>
                        <button onClick={() => this.handleShowHide()}>Show</button>
                    </div>
                    :
                    <>
                        <div className="jobs">
                            {
                                jobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            <h2>Job: {item.title} </h2>
                                            <h3>Salary: {item.salary}</h3>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <button onClick={() => this.handleShowHide()}>Hide</button>
                        </div>
                    </>
                }
            </>

        )
    }

    handleShowHide() {
        this.setState({
            isShow: !this.state.isShow
        })
    }
}

export default ChildLogin;
