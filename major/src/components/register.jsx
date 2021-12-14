import React from 'react';
import axios from 'axios';
import Navbar2 from "./routes/Navbar2";
class MyForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { name: '', password: '', };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    //alert('A form was submitted: ' + this.state);
    const { name, password } = this.state;

    const book = {
      name,
      password
    };
    console.log(book);
    axios.post('http://localhost:5000/api/users/', book)
      .then(() => {
        let cnf = window.confirm("signed up successfully login to continue ...")
        console.log(cnf);
        if (cnf)
          window.location.href = "/login";
      })
      .catch(err => {
        console.error(err);
      });

  };

  render() {
    const mystyle = {
      backgroundColor:"#e6fffd",
      width:"40vw",
      height:"44vh",
      margin:"auto",
      marginTop:"20px",
      marginBottom:"30px",
      border:"1px solid black",
      borderRadius:"10px"
    }
    const mystyle2 = {
      width: "80px",
      backgroundColor: "#ff80b3",
      padding: "0px",
      fontFamily: "Arial",
      fontSize: "18px",
      marginLeft: "15vw",
      marginBottom: "15px",
      marginTop: "15px",
      height: "30px",
      fontWeight: 'bold'
    };
    return (
      <>
      <Navbar2></Navbar2>
      <div style = {mystyle}>
      <form onSubmit={this.handleSubmit} >
        <h1 style={{fontSize:"xx-large",fontWeight:"bold",textAlign:"center"}}>SIGN UP</h1>
        <hr></hr>
        
          <h3 style={{display:"inline",marginLeft:"10px",marginRight:"50px"}}>Name:</h3>
          <input type="text" style={{fontSize:"large",fontWeight:"bold",textAlign:"center"}} value={this.state.value} name="name" onChange={this.handleChange} />
          <br></br>
          <br></br>
          <h3 style={{display:"inline",marginLeft:"10px",marginRight:"20px"}}>Password:</h3>
          <input type="text" style={{fontSize:"large",fontWeight:"bold",textAlign:"center"}} value={this.state.value} name="password" onChange={this.handleChange} />
        
        <br></br>
        <br></br>
        <input type="submit" style={mystyle2} value="Register" />
        <div style={{marginLeft:"9vw",fontSize:"medium"}}>
        Already have an account ? <a href='http://localhost:3000/login'> Login here</a>
        </div>
        
      </form>
      </div>
      </>
    );
  }
}

export default MyForm;