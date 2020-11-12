import React, { Component } from 'react';
import API from '../../utils/API.js';
import Table from '../Table';
import Searchbox from '../Searchbox';

class EmployeeContainer extends Component{
    state = {
        employees:[],
        result: "",
    }

    componentDidMount(){
        this.getEmployees();
    }

    handleSearchInput = event =>{
        let value = event.target.value;
        const name = event.target.name;
        console.log(event.target);

        this.setState({
            [name]:value
        });
    }

    getEmployees = ()=>{
        API.search()
            .then(res => {
                this.setState({employees:res.data.results})
            })
            .catch(err => console.log(err))
    }

    /* formatDate = params =>{
        var d = new Date(params);
        return `${d.getDate}-${d.getDay}-${d.getFullYear}`;
    } */

    getFormattedDate = (params) =>{
        const d = new Date(params);
        const getMonthOfYear = (d.getMonth() <=9)?'0' + (d.getMonth()+1):d.getMonth()+1;
        const getDayOfMonth = (d.getDate() <=9)?'0' + d.getDate():d.getDate();
        return `${getMonthOfYear}-${getDayOfMonth}-${d.getFullYear()}`;
    }

    logData = ()=>{
        if(this.state.employees.length <= 0){
            console.log('not yet');
        } else {
            console.log(this.state.employees[0]);
        }
    }

    render() {
        if(this.state.employees.length <= 0){
            return <div>Waiting!</div>;
        }
        return(
            <div>
                <Searchbox
                   handleSearchInput={this.handleSearchInput} 
                />
                <Table>
                    {this.state.employees.map(emps => (
                        <tr key={emps.login.uuid}>
                            <td><img src={emps.picture.thumbnail} alt={`${emps.name.first} ${emps.name.last}`} /></td>
                            <td>{`${emps.name.first} ${emps.name.last}`} </td>
                            <td>{emps.phone}</td>
                            <td>{emps.email}</td>
                            {/* <td>{this.formatDate=emps.dob.date}</td> */}
                            <td>{this.getFormattedDate(emps.dob.date)}</td>
                        </tr>
                    ))}
                </Table>
            </div>
        )
    }
}

export default EmployeeContainer;