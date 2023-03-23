import React, { Component } from 'react';
import EmployeeService from '../srvices/EmployeeService';

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            employee: []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
        this.viewEmployee = this.viewEmployee.bind(this);


    }
    componentDidMount() {
        EmployeeService.getEmployees().then((res => {
            this.setState({ employee: res.data })
        }));
    }

    addEmployee() {
        this.context.history.push("/add-employee");
    }

    editEmployee(id) {
        this.props.history.push(`/update-employee/${id}`);
    }

    viewEmployee(id) {
        this.props.history.push(`/view-employee/${id}`);
    }

    deleteEmployee(id) {
        EmployeeService.deleteEmployeesById(id).then(res => {
            this.setState({ employee: this.state.employee.filter(employee => employee.id !== id) });
        });
    }


    render() {
        return (
            <div>

                <h2 className='text-center'>Employee List</h2>
                <div className='row'>
                    <button className='btn btn-primary' onClick={this.addEmployee}> Add Employee</button>
                </div>
                <div className='row'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>Employee First Namme</th>
                                <th>Employee Last Namme</th>
                                <th>Employee Email Namme</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employee.map(
                                    employee =>
                                        <tr key={employee.id}>
                                            <td>{employee.firstName}</td>
                                            <td>{employee.lastName}</td>
                                            <td>{employee.emailId}</td>
                                            <td>
                                                <button onClick={() => this.editEmployee(employee.id)} className="btn btn-info">Update</button>
                                                <button onClick={() => this.deleteEmployee(employee.id)} className="btn btn-danger" style={{ marginLeft: "10px" }}>Delete</button>
                                                <button onClick={() => this.viewEmployee(employee.id)} className="btn btn-info" style={{ marginLeft: "10px" }}>View</button>

                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}


export default ListEmployeeComponent;