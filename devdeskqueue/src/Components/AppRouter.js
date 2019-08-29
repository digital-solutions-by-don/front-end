import React from 'react'
import { Switch, Route } from 'react-router-dom';
import PostTicket from "./PostTicket";



export default function AppRouter() {
    return <div className="page-view ui bottom attached segment active tab">
      <Switch>
      <Route exact path='/create-ticket' component={PostTicket} />
        {/* <Route path='/mytickets' component={MyTickets} /> */}
        {/* <Route path='/alltickets' component={AllTickets} /> */}
        {/* <Route path='/unasignedtickets' component={UnasignedTickets} /> */}
        {/* <Route exact path='/' component={Home} /> */}
      </Switch>
    </div>
  
  }