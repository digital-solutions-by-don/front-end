import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { axiosWithAuth } from "./interceptors"

const TicketHeader = styled.h1`
color: black;
text-align: center;
font-size: 2rem;
`;

const StylForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 0 auto;
    background: #efeff3;
    padding: 2rem 2rem;
    border-radius: 5px;
    box-shadow: #999 1px 2px 5px;
    
    input,textarea,select {
        font-size: 1rem;
        margin-bottom: 1rem;
        border: 1px solid gray;
        border-radius: 3px;
        height: 30px;
        padding-left: 12px;
        outline: none;
        &::placeholder {
            color: gray;
    }
  }
  textarea {
    width: 500px;
    height: 150px;
  }
  button {
    padding: 0.5rem 0.5rem;
    background: #bb1333;
    color: #fff;
    font-size: 1rem;
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 3px;
    &:hover {
      color: #bb1333;
      background: #fff;
    }
  }
  .extra {
    margin-top: 1rem;
    text-align: center;
  }
  .field {
    display: flex;
    label {
      margin-right: 1rem;
      width: 20%;
    }
    input {
      width: 500px;
    }
  }
`;

class TicketForm extends Component {
  constructor() {
    super();
      this.state = {
        ticket: {
          title: '',
          description: '',
          type: "student-support",
          tried: '',
          owner: 10,
          assigned: false,
          // date: "2019-06-28T119:20:11.244Z"
      }
  }
 };
 onChange = e => {
  this.setState({ ticket: {...this.state.ticket, [e.target.name]: e.target.value } });
};
onSubmit = e => {
  e.preventDefault();
  // const { title, description, type, tried } = this.state;
  console.log(this.state.ticket)
  axiosWithAuth()
    .post("https://devdesk-backend.herokuapp.com/api/tickets",this.state.ticket 
       )
       
    .then(res => {
      console.log(res);
    })
    .catch(err => console.log(err.response));
};

// {title, description, type, tried, owner, assigned, date}

 render() {
  const { title, description, type, tried } = this.state.ticket;
    return (
      <div>
        <TicketHeader>Submit A Ticket</TicketHeader>
        <StylForm onSubmit={this.onSubmit} action=''>
          <div className='field'>
            <label htmlFor='title'>Title:</label>
            <input
             onChange={event => this.onChange(event)}
             type="text"
             name="title"
             placeholder="Title"
             value={title}
           />
          </div>
          <div className='field'>
            <label htmlFor='type'> Type:</label>
            <select onChange={event => this.onChange(event)} name='type' id='type'>
              <option value="None">None</option>
              <option value="React">React</option>
              <option value="JavaScript">JavaScript</option>
              <option value="HTML">HTML</option>
              <option value="CSS">CSS</option>
            </select>
          </div>
          <div className='field'>
            <label htmlFor='description'>Description:</label>
            <textarea
              onChange={event => this.onChange(event)}              
              type='textarea'
              name='description'
              value={description}
            />
          </div>
          <div className='field'>
            <label htmlFor='tried'>Tried:</label>
            <textarea
              onChange={event => this.onChange(event)}
              type='textarea'
              name='tried'
              value={tried}
            />
          </div>
          <button type='submit'>Submit</button>
        </StylForm>
      </div>
    );
  }
 }
 export default TicketForm;