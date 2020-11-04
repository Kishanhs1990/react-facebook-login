import React from 'react';
import FacebookLogin from 'react-facebook-login';

import './App.css';

const responseFacebook = (response) => {
  console.log(response);
}

function App() {
  return (
    <div>
  <FacebookLogin
    appId="693240007969281"
    autoLoad={true}
    fields="name,email,picture"
    callback={responseFacebook}
    cssClass="my-facebook-button-class"
    icon="fa-facebook"
  />
);
    </div>
  );
}

export default App;
