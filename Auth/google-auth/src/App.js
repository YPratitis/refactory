import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';

export class App extends Component {
  responseGoogle=(response)=>{
    console.log(response);
    console.log(response.profileObj);
  }
  render() {
    return (
      <div>
        <GoogleLogin 
          clientId="1036643678321-kn2rgo0rm3ho40jgo3rcb2oses76hges.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
      </div>
    )
  }
}

export default App
