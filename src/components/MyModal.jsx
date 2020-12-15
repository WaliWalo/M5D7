import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import Comment from "./Comment";
class MyModal extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Comments
              <div>
                <img
                  src={this.props.bookimg}
                  alt={this.props.bookid}
                  style={{ height: "20rem", width: "12rem" }}
                ></img>
              </div>
            </Modal.Title>
          </Modal.Header>
          <Comment bookid={this.props.bookid} />
          <Modal.Footer>
            <Button onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
export default MyModal;
