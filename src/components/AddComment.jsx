import React from "react";
import { Form, Modal, FormLabel, FormGroup, Button } from "react-bootstrap";
class AddComment extends React.Component {
  state = {
    comment: {
      comment: "",
      rate: 1,
      elementId: "",
    },
  };

  updateCommentField = (e) => {
    let comment = { ...this.state.comment }; // creating a copy of the current state
    let currentId = e.currentTarget.id;

    comment[currentId] = e.currentTarget.value; // e.currentTarget.value is the keystroke
    comment["elementId"] = this.props.bookid;
    this.setState({ comment: comment });
  };

  handleSubmit = async (e, call) => {
    e.preventDefault();
    call = this.props.modify;
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/`,
        {
          method: "POST",
          body: JSON.stringify(this.state.comment),
          headers: new Headers({
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI2NzU3Yjk4MzViMDAwMTc1ODRlZjUiLCJpYXQiOjE2MDU3OTMxNDcsImV4cCI6MTYwNzAwMjc0N30.lxFe7Z-irNQnTdXgds1emn7EBt7CEXW_OSXlWyA-ypI",
          }),
        }
      );
      if (response.ok) {
        alert("Comment saved!");
        call(); //changes the state of the comment component
        this.setState({
          comment: {
            comment: "",
            rate: 1,
            elementId: "",
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Modal.Body>
          <FormGroup>
            <Form.Label htmlFor="rate">Rating: </Form.Label>
            <Form.Control
              name="rate"
              id="rate"
              as="select"
              value={this.state.comment.rate}
              onChange={this.updateCommentField}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
            <FormLabel htmlFor="comment">Add Comment</FormLabel>
            <Form.Control
              name="comment"
              id="comment"
              as="textarea"
              rows={3}
              value={this.state.comment.comment}
              onChange={this.updateCommentField}
            />
          </FormGroup>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Modal.Body>
      </Form>
    );
  }
}
export default AddComment;
