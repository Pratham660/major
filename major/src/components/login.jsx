import React from 'react';
import axios from 'axios';
const reactData = [{name:' Tom',password:'test123'}];
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '',password: '',};
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
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
    axios.get('http://localhost:5000/api/users/')
    .then(res => {
      console.log(res.data);
      for(var user of res.data)
      {
        if(book.name == user.name)
        window.alert("login success");
    
      }
    })
      .catch(err => {
        console.error(err);
      });
};
 
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>LOGIN</h1>
        <label>
          Name:
          <input type="text" value={this.state.value} name="name" onChange={this.handleChange} />
          password:
          <input type="text" value={this.state.value} name="password" onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
 
export default MyForm;