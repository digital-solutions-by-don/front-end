import React, { useEffect } from 'react';
// import { Redirect } from 'react-router-dom';
import "./App.css";
import axios from 'axios';

import Header from "./Components/Header";
import TicketForm from './Components/TicketForm';
// import FormikForm from './Components/PostTicket';
import TicketCard from './Components/TicketCard';

function App() {
  useEffect(() => {
    axios 
    .post ( "https://devdesk-backend.herokuapp.com/api/auth/login",{
      username: "testuser",
      password: "1234"
  }
    )
  .then (res => {
    console.log(res.data)
  }) .catch(err => console.log(err))
    
   
  }, []);

  return (
    <main>
      <Header />
      <TicketForm />
      {/* <TicketCard />> */}
    </main>
  )
}

export default App;