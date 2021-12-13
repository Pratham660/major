import React, { useEffect, useState } from 'react';
import axios from 'axios';
class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { doubt: '', };
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        //alert('A form was submitted: ' + this.state);
        const { doubt } = this.state;

        const book = {
            doubt
        };
        console.log(book);
        axios.post('http://localhost:5000/api/blogs/', book)
            .then(() => {
                window.alert("post created successfully")
                // console.log(cnf);
                // if (cnf)
                //   window.location.href = "/login";
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
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>What's on your mind today ??</h1>
                    <br></br>
                    <label>
                        POST YOUR DOUBT HERE :
                        <br></br>
                        <input type="text" value={this.state.value} name="doubt" onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <div id='root1'></div>
            </div>
        );
    }
}

export default MyForm;