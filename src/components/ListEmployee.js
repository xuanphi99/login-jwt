import React, { Component } from 'react'
import '../assert/style_ListEmployee.css'
import EmployeeService from '../service/EmployeeService'
export default class ListEmployee extends Component {


    constructor(props) {
        super(props);
        this.state = {
            page : 1,
            pageSize : 5 ,
            token : {}
        }
    }
    

    componentDidMount() {


        EmployeeService.getEmployees(this.state.page, 
            this.state.pageSize ,
            JSON.parse(localStorage.getItem('token')).access_token,
            JSON.parse(localStorage.getItem('dataUser')).accessToken )
        .then((res) => {

              this.setState({
               
              });
          })
          .catch(function (err) { 
          });
    }
    

    render() {
        return (
            <div>
                ds nv
            </div>
        )
    }
}
