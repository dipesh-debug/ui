
// import React,{ Component } from 'react';

// class App extends Component{
// constructor()
//   {
//     super();
//     this.state = {
//       email:null,
//       password:null,
//       login : false,
//       store : null


//     }
//   }
//   // componentDidMount(){
//   // this.storeCollector()
//   // }
//   // storeCollector(){
//   //   let store = JSON.parse(localStorage.getItem('login'));
//   //   if(store && store.login){
//   //     this.setState({login:true, store:store})
//   //   }
//   // }
  
//  login ()
//   {
    
//     fetch('http://127.0.0.1:8000/api/user/login/user/',{
//     method : "POST",
//     credentials: "include",
//     // headers:{
//       headers: {
//         "Accept": "application/json",
//         "Content-Type": "application/json",
//       },
//       mode : 'no-cors',
//      body:JSON.stringify(this.state)  
//     }).then((response)=>{
//       response.json().then((result)=>{
//         console.warn("result",result);
//         localStorage.setItem('login',JSON.stringify({
//           login:true,
//           token:result.token
//         }))
//         // this.storeCollector()
//       })
//     })

//     }

//   // post(){
//   //   let token = "Bearer"+this.state.store.token
//   //   fetch('http://127.0.0.1:8000/api/user/profile/',{
//   //   method : "POST",
//   //   headers:{
//   //     'Authorization' : token
//   //   },
//   //   body:JSON.stringify(this.state)  
//   //   }).then((response)=>{
//   //     response.json().then((result)=>{
//   //       this.setState({
//   //         response:result.message
//   //       })
//   //       console.warn("result",result);
       
//   //     })
//   //   })


//   // }

  
//   render(){
//     return (
//       <div>
//       <h1> JWT Authentication </h1>
//       <h2>hello@gmail.com</h2>
//       <h3>123456@</h3>
//       <div>
//           <input type ="text" onChange = {(event)=>{this.setState({email :event.target.value})}}/> <br></br>
//           <input type ="password" onChange = {(event)=>{this.setState({password :event.target.value})}}/> <br></br>
//           <button onClick = {()=>{this.login()}}> Login</button>
//           </div> 
//           </div>
    
  

//     );
//   }
// }

//   export default App;
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import {Navigate} from 'react-router-dom';
// import {useNavigate} from 'react-router-dom';



import React, { useState } from "react";
import './App.css';

// import './Card.js';
import Streams from './Streams';
import axios from "axios";


function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  console.log({ email, password })
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  const[Navigate, setRedirect] = useState (false);
  // const Navigate = useNavigate();
  const handleApi = () => {
   
    console.log({ email, password })
    axios.post('http://127.0.0.1:8000/api/user/login/user/', {
      email: email,
      password: password
    }).then(result => {
      console.log(result.data)
      alert('success')
    })
      .catch(error => {
        alert('service error')
        console.log(error)
      })
      setRedirect(true);
    
  }
  if(Navigate) {
  return <Navigate to ="Streams"/>
  }

  return (
    
    <div className="App">
     
      Email : <input value={email} onChange={handleEmail} type="text" /> <br />
      Password : <input value={password} onChange={handlePassword} type="text" /> <br />
      <button onClick={handleApi} >Login</button>
      <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<App/>}/> */}
        <Route path="Streams" element={<Streams />} />
        </Routes>
        </BrowserRouter>
        
        <link href = "F:\MAJOR PROJECT\TEST\Login-fetch-Frontend\src\App.css"></link>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
export default App;

