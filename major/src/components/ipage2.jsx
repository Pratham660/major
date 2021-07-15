import React from "react";
import "./css/Box.css";
import "./css/Boxes.css";
import "./css/herohome.css";
import { Card } from "react-bootstrap";
import { Button } from 'react-bootstrap';


const MoreDeets = () => {
   
  const cardInfo = [
    {
      image: "https://image.flaticon.com/icons/png/512/3024/3024163.png",
      title: "total question 31",
      text: "ARRAY",
    },
    {
      image:
        "https://ssppconsulting.com/wp-content/uploads/2019/07/structure-icon-1.png",
      title: "Total question 10",
      text: "MATRIX",
    },
    {
      image:
        "https://img-premium.flaticon.com/png/512/1915/premium/1915985.png?token=exp=1626362282~hmac=7d056bc8f72fe884c52d146170f16fcf",
      title: "total question 39",
      text: "STRING",
    },
    {
      image:
        "https://image.flaticon.com/icons/png/512/603/603161.png",
      title: "total question 56",
      text: "SEARCH AND SORT",
    },
    {
      image: "https://image.flaticon.com/icons/png/512/1660/1660882.png",
      title: "total question 23",
      text: "LINKED LIST",
    },
    {
      image:
        "https://image.flaticon.com/icons/png/512/1449/1449141.png",
      title: "total question 14",
      text: "BINARY TREE",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Binary_search_tree.svg/300px-Binary_search_tree.svg.png",
      title: "toal question 22",
      text: "Binary Search Tree",
    },
    {
      image:
        "https://image.flaticon.com/icons/png/512/2932/2932697.png",
      title: "total question 31",
      text: "GREEDY",
    },
    {
      image: "https://img-premium.flaticon.com/png/512/1423/premium/1423257.png?token=exp=1626364068~hmac=1041051684d34940ad36d5e055afe062",
      title: "total question 10",
      text: "BACKTRACKING",
    },
    {
      image:
        "https://image.flaticon.com/icons/png/512/2702/2702058.png",
      title: "total question 31",
      text: "STACK AND QUEUES",
    },
    {
      image:
        "https://image.flaticon.com/icons/png/512/2192/2192436.png",
      title: "total question 31",
      text: "HEAP",
    },
    {
      image:
        "https://img-premium.flaticon.com/png/512/404/premium/404672.png?token=exp=1626363599~hmac=309e43f631416f8ecb99cb44a803fa77",
      title: "total question 31",
      text: "GRAPH",
    },
    {
      image: "https://img-premium.flaticon.com/png/512/207/premium/207104.png?token=exp=1626363881~hmac=ae217893daa34509474fd9a9026eb967",
      title: "total question 31",
      text: "TRIE",
    },
    {
      image:
        "https://image.flaticon.com/icons/png/512/1444/1444135.png",
      title: "total question 31",
      text: "DYNAMIC PROGRAMMING",
    },
    {
      image:
        "https://image.flaticon.com/icons/png/512/2214/2214581.png",
      title: "total question 31",
      text: "BIT MANIPULATION",
    }
    
   
   
  ];

  const renderCard = (card, index) => {
    return (
       
     /* <Card style={{ width: "15rem" }} key={index} className="box">
        <Card.Img variant="top"  className="abc" src="holder.js/50px50" src={card.image} />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>{card.text}</Card.Text>
          <Button variant="primary">Start Now</Button>
        </Card.Body>
      </Card>*/
      <>
        <div className="container">
        <div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <div className="row">
          <div className="col-lg-6">
          <p class="card-text">{card.text}</p>
          </div>
          <div className="col-lg-6">
          <img src={card.image} classsName="abc" style={{maxHeight:"50px"}} ></img>
          
          </div>
        </div>
      
        <h5 class="card-title">{card.title} </h5>
       
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  
</div>
        </div>
      </>
    );
  };

  
  return<div>
     <div >
     <h1 class="HowItWorks_header__394j-" class="text-center"  >Choose  A  Topic</h1>
     </div>
      <div className="grid" >
      
      {cardInfo.map(renderCard)}</div>
      </div>
};

export default MoreDeets;