import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from "./routes/Navbar";
class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { doubt: '',};
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };
    handleSubmit = (event) => {
        event.preventDefault();
        //alert('A form was submitted: ' + this.state);
        this.setState({ ['postedby']: localStorage.getItem('curruser') });
        const { doubt} = this.state;
        const postedby =localStorage.getItem('curruser')

        const book = {
            doubt,
            postedby
        };
        console.log(book);
        axios.post('http://localhost:5000/api/blogs/', book)
            .then(() => {
                let cnf = window.confirm("post created successfully");
                // console.log(cnf);
                if (cnf)
                  window.location.href = "/discuss";
            })
            .catch(err => {
                console.error(err);
            });
        }
        // componentDidMount(){
        //     window.onload = function () {
        //         axios.get('http://localhost:5000/api/blogs/')
        //             .then(res => {
        //                 console.log(res.data);
        //                 for (var value of res.data) {
        //                     var doubtname=value.doubt;
        //                      //list.append("<h1>{doubtname}</h1>");
        //                      //content.append(doubtname);
        //                      document.getElementById('root1').innerText+=doubtname;
        //                 }
        //             })
        //             .catch(err => {
        //                 console.error(err);
        //             });
        //    }
            
    //};

    render() {  
        const mystyle = {
            // width: "90vw",
            backgroundColor: "#e6f5ff",
            padding: "10px",
            fontFamily: "Arial",
            fontSize: "15px",
            margin: "2vw"
            // height: "250px"
          };
          const mystyle2 = {
            width: "70px",
            backgroundColor: "#e6f5ff",
            padding: "10px",
            fontFamily: "Arial",
            fontSize: "15px",
            marginLeft: "25px",
            marginBottom: "25px",
            height: "50px"
          };
        return (
            <div>
                <Navbar></Navbar>
                <form onSubmit={this.handleSubmit}>
                    <h1 style={{margin:"25px"}}>What's on your mind today ??</h1>
                    <br></br>
                   
                        <textarea type="text" rows="6" cols="100" value={this.state.value} name="doubt" onChange={this.handleChange} style={mystyle} />
                  
                    <br></br>
                    <input type="submit" value="POST"  style={mystyle2} />
                </form>
                <div id='root1'></div>
            </div>
        );
    }
}

export default MyForm;