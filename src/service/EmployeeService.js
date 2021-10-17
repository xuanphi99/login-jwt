import axios from 'axios';
const BASE_URL = "http://localhost:8080/o/authz-rest/";
const BASE_TOKEN = "http://localhost:8080/o/oauth2/token";
const BASE_EMPLOYEE = "http://localhost:8080/o/dogoo/employee-rest-builder/v1.0/employees/";



class EmployeeService {

    signIn(username,password,access_token){
        return axios.post(
            BASE_URL +"signin",
            {
                'username' : username,
                'password' : password
            },
         {   
             headers :  
              { 
                'Accept': 'application/json', 
                'Authorization': 'Bearer ' + access_token,
              }
        }
        

        );
    }

    getEmployees(page,pageSize, access_token,token_author){
      console.log(token_author );
      console.log(access_token );
      return axios.get(
        // BASE_EMPLOYEE + "?page="+ page +"&pageSize="+pageSize ,
        BASE_EMPLOYEE,
        {} ,
       {
       headers: { 
          'dogoo-x-user-context-request': access_token, 
          'Authorization': 'Bearer ' + token_author  , 
        }
      }
      )

    }

    getToken(){
       return axios.post(
         BASE_TOKEN + "?grant_type=client_credentials&client_id=id-4be0d88e-3537-fbbb-f7af-48217bcdce2e&client_secret=secret-f0816786-f238-dad2-521b-34555f380e6",

         {},
    
      {  
          'headers' : 
            {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
            }
      }


       )
    
    }


}

export default new EmployeeService()