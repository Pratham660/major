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
    return (
      <>
      <Navbar2></Navbar2>
      <form onSubmit={this.handleSubmit}>
        <h1>REGISTER</h1>
        <label>
          UserName:
          <input type="text" value={this.state.value} name="name" onChange={this.handleChange} />
          password:
          <input type="text" value={this.state.value} name="password" onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      </>
    );
  }
}

export default MyForm;