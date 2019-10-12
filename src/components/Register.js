import React, { Component } from 'react'
import { connect } from 'react-redux';
import {addTask} from "../redux/actions";
import { Button, Form, FormGroup, Input } from 'reactstrap';



export class Register extends Component {

    handleSubmit = (e) => {
        e.preventDefault()     
    }
    
  render() {
    return (
      <div className="register">
      <h3>For suppliers</h3>
      <br></br>
      <h1>Register & get <br></br> discovered</h1>
      <br></br>
      <Form>
        <FormGroup>   
          <Input type="email" name="companyname" id="exampleEmail" placeholder="Company name" />
        </FormGroup>
        <FormGroup>
          <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
        </FormGroup>
        <FormGroup>
          <Input type="password" name="password" id="examplePassword" placeholder="Password" />
        </FormGroup>
        <Button color="success" >Register</Button>
      </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {}
}
const mapDispatchToProps = (dispatch) => {
    return { addTask:(task) => dispatch(addTask(task))}   
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
