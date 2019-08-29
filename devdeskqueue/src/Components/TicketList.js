import React, { useEffect, useState } from "react";
import axios from 'axios';
import TicketCard from "./TicketCard";

export default function TicketList() {
let [content, setContent] = useState(null);


useEffect(() => {
    axios        
        .get("https://devdesk-backend.herokuapp.com/api/tickets/" )           
        .then(res => {
            setContent(res.data);
            console.log(res.data);
          });
    }, []); 


    return (
        <section>
            {content.results.map(c => <TicketCard key={c.name} ticket={c} /> )}
        </section>
    );


}