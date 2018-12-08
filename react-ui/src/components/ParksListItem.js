import React from "react";
import { Component } from "react";
import { Link } from 'react-router-dom'

// import Example from './signup';
import { Container, Row, Col } from "reactstrap";


// Import Sign up to use it inside Booking
import SignUp from "./SignUp.jsx"
import Book from "./book.js"

import {
  Card,
  CardImg,
  CardBlock,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

// import { Card, CardBlock, Button, CardTitle, CardText, CardImg } from 'reactstrap';
// import mapCard from './mapCard'

class ParksListItem extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      message: null,
      fetching: true,
      modalsignUp: false,
      modalBook: false
    };

    // this.toggle = this.toggle.bind(this);
    this.changeRoute = this.changeRoute.bind(this);
    this.toggleSignUp = this.toggleSignUp.bind(this);
    this.toggleBook = this.toggleBook.bind(this);
  }

  
  toggleSignUp() {
    this.setState({
      modal: !this.state.modalsignUp
    });
  
  }

  toggleBook() {
    this.setState({
      modal: !this.state.modalBook
    });
  
  }

changeRoute () {
  if (localStorage.getItem("username") === null) {
    //...opensignUp
    this.toggleSignUp()
  } else {
    // render book page
  }
    console.log("test");
  };

render() {
  console.log(this.props.parkInfo)
  return (
   
    <div>
    <Card className="mapCardN">
      <CardImg top width="100%" src={this.props.parkInfo.image} />
      <CardBody>
        <CardTitle>{this.props.parkInfo.title}</CardTitle>
        <CardSubtitle>{this.props.parkInfo.description}</CardSubtitle>
        <CardText>{""}</CardText>
        <CardText>{"Area : "}{this.props.parkInfo.location}</CardText>
        <CardText>Owner Name : {this.props.parkInfo.ownerdetails[0].name}</CardText>
        <CardText>Phone Number : {this.props.parkInfo.ownerdetails[0].phoneNumber}</CardText>
        <CardText>{"Time : From "}{this.props.parkInfo.startTime}{" To "}{this.props.parkInfo.endTime}</CardText>
        <CardText>Rating : {this.props.parkInfo.ownerdetails[0].rating}</CardText>
        <CardText>{"Price : "}{this.props.parkInfo.price}</CardText>
        <Link to={{pathname:"/book", park: this.props.parkInfo}} className="bookButton" >
            <Button className="btn btn-info">Book Now</Button>
            </Link>

      </CardBody>
    </Card>
  </div>
   
  );
}
};

export default ParksListItem;
