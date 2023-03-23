import axios from "axios";

const EMPLOYEE_BASE_API = 'http://localhost:8080/api/v1/employees';
class EmployeeService{

getEmployees(){
    return axios.get(EMPLOYEE_BASE_API);
}   

saveEmployee(employee){
    return axios.post(EMPLOYEE_BASE_API,employee);
}
s
updateEmployee(empid, employee){
   console.log("Hello" + EMPLOYEE_BASE_API + '/' + empid);
    return axios.put(EMPLOYEE_BASE_API + '/' + empid,employee);
}

getEmployeesById(empId){
    return axios.get(EMPLOYEE_BASE_API + '/' + empId);
}

deleteEmployeesById(empId){
    return axios.delete(EMPLOYEE_BASE_API + '/' + empId);
}

}
const varibale = new EmployeeService();
export default varibale;