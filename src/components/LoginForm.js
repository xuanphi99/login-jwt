import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import EmployeeService from '../service/EmployeeService.js'
export default class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username : "",
      password : "",
      isRedirect : false,
      token : {
        access_token : "" ,
        expires_in : 0 ,
        scope : "",
        token_type : ""
      }
    }
  }
  

  getInput  = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })


  }

  handleSubmit = (e) => {

    e.preventDefault(); 
      EmployeeService.signIn(this.state.username , this.state.password, this.state.token.access_token)
      .then((res) => {
        localStorage.setItem('dataUser', JSON.stringify(res.data));
          this.setState({
            isRedirect : true
          });
      })
      .catch(function (err) { 
          alert("He thong ban , Vui long thu lai ")
      });

  }

componentDidMount() {
  
    // const params = new URLSearchParams();
    // params.append('token', '123');

      EmployeeService.getToken()
      
      .then((res) => {


        this.setState({
          token : {
            access_token : res.data.access_token ,
            expires_in :  res.data.expires_in ,
            scope :  res.data.scope,
            token_type : res.data.token_type 
          }
        })
        localStorage.setItem('token', JSON.stringify(this.state.token));

     
    })
    .catch(function (err) { 
        alert("He thong ban , Vui long thu lai ")
    });

  }

    render() {

      if(this.state.isRedirect ===true){
        return <Redirect to='/employee'/>;
      }

        return (
         

<div className="container">
  <div className="d-flex justify-content-center h-100">
    <div className="card">
      <div className="card-header">
        <h3>Sign In</h3>
        <div className="d-flex justify-content-end social_icon">
          <span><i className="fab fa-facebook-square" /></span>
          <span><i className="fab fa-google-plus-square" /></span>
          <span><i className="fab fa-twitter-square" /></span>
        </div>
      </div>
      <div className="card-body">
        <form>
          <div className="input-group form-group">
            <div className="input-group-prepend">
              <span className="input-group-text"><i className="fas fa-user" /></span>
            </div>
            <input  type="text" 
            name = "username"
            onChange={ (e) => {this.getInput(e)}}
            className="form-control" 
            placeholder="username" />
          </div>
          <div className="input-group form-group">
            <div className="input-group-prepend">
              <span className="input-group-text"><i className="fas fa-key" /></span>
            </div>
            <input type="password" name="password" onChange={ (e) => {this.getInput(e)}} className="form-control" placeholder="password" />
          </div>
          <div className="row align-items-center remember">
            <input type="checkbox" />Remember Me
          </div>
          <div className="form-group">
            <input 
              onClick = { (e) => {this.handleSubmit(e)}}
             type="button" 
             defaultValue="Login" 
             className="btn float-right login_btn" />
          </div>
        </form>
      </div>
    
    </div>
  </div>
</div>

        )
    }
}
