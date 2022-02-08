import React, { Component } from 'react';
import "./Form.css"
import axios from 'axios';

export default class Form extends Component {
    constructor(props) {
        super(props)
        this.button = React.createRef()
        this.wrapper = React.createRef()
        
        // Setting up functions
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeMessage = this.onChangeMessage.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
        // Setting up state
        this.state = {
          name: '',
          email: '',
          submit: 'submit',
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
        const styles = this.button.current
        
        e.preventDefault()

        const formObject = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
          };
         try{
            await axios.post('http://localhost:4000/request', formObject)
            .then(styles.style.background = '#7ac142', this.wrapper.current.style.display = "flex",
            this.setState({submit: 'sent'}))
         }catch(err){
             console.log(err)
         }
    
        this.setState({name: '', email: '', message: '',submit: 'submit'})
        styles.style.background = '#f52225'
        this.wrapper.current.style.display = "none"

      }
  
  render() {
    return (
        <div data-aos="fade-up" className='form'>
              <p className='poppins formheader'>I'm always open to discussing product design work or partnerships.</p>
              <form className='forms' onSubmit={this.onSubmit}>
                  <input type="text" placeholder='Name *'required={true} value={this.state.name} onChange={this.onChangeName} className='nameinput1 dmsans'></input>
                  <input type="email" required={true} placeholder='Email *' value={this.state.email} onChange={this.onChangeEmail} className='nameinput2 dmsans'></input>
                  <input type="text" placeholder='Message *' required={true}  value={this.state.message}onChange={this.onChangeMessage} className='nameinput3 dmsans'></input>
                  <div className='success'>
                  <button type="submit" ref={this.button} className='submit dmsans'>{this.state.submit}</button>
                  <div className='wrapper' ref={this.wrapper}><svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                      <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                      <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                  </svg></div>
                  </div>
              </form>
          </div>
    );
  }
}

