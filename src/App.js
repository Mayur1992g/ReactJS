import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponet from './components/HeaderComponet';
import FooterComponet from './components/FooterComponet';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponet from './components/ViewEmployeeComponet';

function App() {
  return (
    <div>
      <Router>
        <div className='container'>
          <HeaderComponet />
          <div className="container">
            <Switch>
              <Route path="/" exact component={ListEmployeeComponent} ></Route>
              <Route path="/employees" component={ListEmployeeComponent} ></Route>
              <Route path="/add-employee" exact component={CreateEmployeeComponent}></Route>
              <Route path="/update-employee/:id" exact component={UpdateEmployeeComponent}></Route>
              <Route path="/view-employee/:id" exact component={ViewEmployeeComponet}></Route>


            </Switch>
          </div>
          <FooterComponet />
        </div>
      </Router>
    </div>
  );
}

export default App;
