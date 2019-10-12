import React, { Component } from "react";
import { connect } from "react-redux";
import { delTask } from "../redux/actions";
import { Button, Form, FormGroup, Input } from 'reactstrap';


export class Search extends Component {

handleDelete = (key) => {   
}
  render() {
    return (
      <div style = {{alignItems:"flex-start"}}> 
      <div className="search">  
      <h3>For Buyers</h3>
      <br></br>
      <h1>Google for <br></br>suppliers</h1>
      <br></br>
      <h5>Search by company name,category,products or services</h5>
      <br></br>
      <Form>
        <FormGroup> 
          <Input type="text" name="search" id="exampleEmail" placeholder="" />
        </FormGroup>
        <Button color="success">Search</Button>
      </Form>
    </div>
  </div> 
    );
  }
}

const mapStateToProps = state => ({
  data: state.tasks.data
});

const mapDispatchToProps = dispatch => {
  return { delTask: taskID => dispatch(delTask(taskID)) };
};

export default connect(mapStateToProps,mapDispatchToProps)(Search);
