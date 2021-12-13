// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// class MyForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { doubt: '', };
//     }

//     handleChange = (event) => {
//         this.setState({ [event.target.name]: event.target.value });
//     };

//     handleSubmit = (event) => {
//         event.preventDefault();
//         //alert('A form was submitted: ' + this.state);
//         const { doubt } = this.state;

//         const book = {
//             doubt
//         };
//         console.log(book);
//         axios.post('http://localhost:5000/api/blogs/', book)
//             .then(() => {
//                 window.alert("post created successfully")
//                 // console.log(cnf);
//                 // if (cnf)
//                 //   window.location.href = "/login";
//             })
//             .catch(err => {
//                 console.error(err);
//             });
//         }
//         // componentDidMount(){
//         //     window.onload = function () {
//         //         axios.get('http://localhost:5000/api/blogs/')
//         //             .then(res => {
//         //                 console.log(res.data);
//         //                 for (var value of res.data) {
//         //                     var doubtname=value.doubt;
//         //                      //list.append("<h1>{doubtname}</h1>");
//         //                      //content.append(doubtname);
//         //                      document.getElementById('root1').innerText+=doubtname;
//         //                 }
//         //             })
//         //             .catch(err => {
//         //                 console.error(err);
//         //             });
//         //    }
            
//     //};

//     render() {  
//         return (
//             <div>
//                 <form onSubmit={this.handleSubmit}>
//                     <h1>What's on your mind today ??</h1>
//                     <br></br>
//                     <label>
//                         POST YOUR DOUBT HERE :
//                         <br></br>
//                         <input type="text" value={this.state.value} name="doubt" onChange={this.handleChange} />
//                     </label>
//                     <input type="submit" value="Submit" />
//                 </form>
//                 <div id='root1'></div>
//             </div>
//         );
//     }
// }

// export default MyForm;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardSubTitle, MDBCardText, MDBCardLink } from 'mdb-react-ui-kit';
export default function Parent(){
const [repo,setRepo]=useState([]);
const getRepo = () =>{
    axios.get('http://localhost:5000/api/blogs')
    .then((res)=>{
        console.log(res.data);
        const myRepo = res.data;
        setRepo(myRepo);
    });

};
useEffect(() => getRepo()
, []);
const mystyle2 = {
    width: "140px",
    backgroundColor: "#ff80b3",
    padding: "10px",
    fontFamily: "Arial",
    fontSize: "20px",
    marginLeft: "15px",
    marginBottom: "25px",
    height: "50px",
    fontWeight: 'bold'
  };
return (
    <div>
        <div >
        <a className="btn" href="http://localhost:3000/post" style={{"margin-left" : "30px"}}><input className="btn" type="button" style={mystyle2} value="Post a doubt"/></a>
        </div>
        <br></br>
        <br></br>
        {repo.map((repos)=> (
            <div>
                <MDBCard style={{ width: '90vw' ,marginLeft: '4vw',marginTop: '10px',backgroundColor :'#f2f2f2'}}>
      <MDBCardBody>
        <MDBCardTitle>Doubt No. {repos.id}</MDBCardTitle>
        <hr></hr>
        <MDBCardText>
          {repos.doubt}
        </MDBCardText>
        <hr></hr>
        <MDBCardSubTitle>Posted by {repos.postedby}: on {repos.createdAt}</MDBCardSubTitle>
        <MDBCardLink href='#'>Reply</MDBCardLink>
        <MDBCardLink href='#'>Like</MDBCardLink>
      </MDBCardBody>
    </MDBCard>
            </div>
        ))}
        
    </div>
)
}

