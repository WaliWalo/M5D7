import React from "react";
import "./SingleBook.css";
import { Card, Button, Row, Col } from "react-bootstrap";
import MyModal from "./MyModal.jsx";

import MyBadge from "./MyBadge.jsx";

class SingleBook extends React.Component {
  // const [modalShow, setModalShow] = React.useState(false);
  state = {
    selected: false,
    cardStyle: { color: "black" },
    modalShow: false,
  };

  render() {
    let variant;
    if (this.props.book.category === "fantasy") variant = "info";
    else if (this.props.book.category === "history") variant = "warning";
    else if (this.props.book.category === "horror") variant = "dark";
    else variant = "light";

    let handleClick = () => {
      if (this.state.selected === true) {
        this.setState({ cardStyle: { color: "black" } });
        this.setState({ selected: false });
      } else {
        this.setState({ cardStyle: { color: "red" } });
        this.setState({ selected: true });
      }
    };

    return (
      <>
        <Row>
          <Col>
            <MyModal
              bookid={this.props.book.asin}
              bookimg={this.props.book.img}
              show={this.state.modalShow}
              onHide={() => this.setState({ modalShow: false })}
            />
            <Card
              style={this.state.cardStyle}
              onClick={handleClick}
              key={this.props.book.id}
            >
              <Card.Img
                variant="top"
                src={this.props.book.img}
                style={{ height: "20rem" }}
              />
              <Card.Body style={{ height: "12rem" }}>
                <Card.Title>{this.props.book.title}</Card.Title>
                <Card.Text>{this.props.book.price}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => this.setState({ modalShow: true })}
                >
                  Go somewhere
                </Button>
                <MyBadge color={variant} category={this.props.book.category} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}

export default SingleBook;
