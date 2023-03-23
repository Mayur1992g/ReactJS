import React, { Component } from 'react';
import EmployeeService from '../srvices/EmployeeService';

class UpdateEmployeeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            emailId: ''
        }

        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
    }
    componentDidMount() {
        EmployeeService.getEmployeesById(this.state.id).then(res => {
            let employee = res.data;
            this.setState({
                firstName: employee.firstName, lastName: employee.lastName, emailId: employee.emailId
            });
        });
    }


    changeFirstNameHandler = (event) => {
        this.setState({ firstName: event.target.value });
    }
    changeLastNameHandler = (event) => {
        this.setState({ lastName: event.target.value });
    }
    changeEmailIdHandler = (event) => {
        this.setState({ emailId: event.target.value });
    }

    updateEmployee = (e) => {
        e.preventDefault();
        let employee = { firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId };
        EmployeeService.updateEmployee(this.state.id,employee).then(res => {
            this.props.history.push('/employees');
        });
    }

    cancel() {
        this.props.history.push('/');
    }

    render() {
        return (
            <div class="col-md-6 offset-md-3">
                <h3>Update Employee</h3>
                <form>

                    <div class="form-group">
                        <label>First Name</label>
                        <input type="text" placeholder='Enter First Name' class="form-control" id="firstName" name="firstName" value={this.state.firstName} onChange={this.changeFirstNameHandler} />
                    </div>
                    <div class="form-group">
                        <label>Last Name</label>
                        <input type="text" placeholder='Enter Last Name' class="form-control" id="lastName" name="lastName" value={this.state.lastName} onChange={this.changeLastNameHandler} />
                    </div>
                    <div class="form-group">
                        <label>Email Id</label>
                        <input type="text" placeholder='Enter Email Id' class="form-control" id="emailId" name="emailId" value={this.state.emailId} onChange={this.changeEmailIdHandler} />
                    </div>

                    <button class="btn btn-success" onClick={this.updateEmployee}>Update</button>
                    <button class="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>

                </form>
            </div >
        );
    }
}


export default UpdateEmployeeComponent;