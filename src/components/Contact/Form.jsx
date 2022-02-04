import React, { Component } from 'react';
import "./Form.css"
import axios from 'axios';

export default class Form extends Component {
    constructor(props) {
        super(props)
    
        // Setting up functions
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeMessage = this.onChangeMessage.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        // Setting up state
        this.state = {
          name: '',
          email: '',
          message: ''
        }
      }
      onChangeName(e) {
        this.setState({name: e.target.value})
      }
    
      onChangeEmail(e) {
        this.setState({email: e.target.value})
      }
    
      onChangeMessage(e) {
        this.setState({message: e.target.value})
      }

      async onSubmit(e) {
        e.preventDefault()
    
        /*console.log(`Thanks for reaching out to us!`);
        console.log(`Name: ${this.state.name}`);
        console.log(`Email: ${this.state.email}`);
        console.log(`Message: ${this.state.message}`);*/

        const formObject = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
          };
         try{
            await axios.post('http://localhost:4000/form/request', formObject)
            .then(res => console.log(res.data));
         }catch(err){
             console.log(err)
         }
    
        this.setState({name: '', email: '', message: ''})
      }
  render() {
    return (
        <div data-aos="fade-up" className='form'>
              <p className='poppins formheader'>I'm always open to discussing product design work or partnerships.</p>
              <form className='forms' onSubmit={this.onSubmit}>
                  <input type="text" placeholder='Name *'required="true" value={this.state.name} onChange={this.onChangeName} className='nameinput1 dmsans'></input>
                  <input type="email" required="true" placeholder='Email *' value={this.state.email} onChange={this.onChangeEmail} className='nameinput2 dmsans'></input>
                  <input type="text" placeholder='Message *' required="true"  value={this.state.message}onChange={this.onChangeMessage} className='nameinput3 dmsans'></input>
                  <button type="submit" className='submit dmsans'>Submit</button>
              </form>
          </div>
    );
  }
}

