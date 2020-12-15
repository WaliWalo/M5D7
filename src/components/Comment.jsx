import React, { Component } from "react";
import { Button, ListGroup, FormControl } from "react-bootstrap";
import AddComment from "./AddComment";
export default class Comment extends Component {
  state = {
    comments: [],
    loading: false,
    allComment: [],
  };
  componentDidMount = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${this.props.bookid}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI2NzU3Yjk4MzViMDAwMTc1ODRlZjUiLCJpYXQiOjE2MDU3OTMxNDcsImV4cCI6MTYwNzAwMjc0N30.lxFe7Z-irNQnTdXgds1emn7EBt7CEXW_OSXlWyA-ypI",
          },
        }
      );
      let comments = await response.json();
      this.setState({ comments: comments, allComment: comments });
    } catch (e) {
      console.log("error happened, that's life", e);
    }
  };

  removeComment = async (id) => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI2NzU3Yjk4MzViMDAwMTc1ODRlZjUiLCJpYXQiOjE2MDU3OTMxNDcsImV4cCI6MTYwNzAwMjc0N30.lxFe7Z-irNQnTdXgds1emn7EBt7CEXW_OSXlWyA-ypI",
          },
        }
      );
      this.setState({ loading: false });
      if (response.ok) {
        alert("Comment Deleted!");
        this.componentDidMount();
      }
    } catch (e) {
      console.log("error happened, that's life", e);
    }
  };
  handleSearch = (query) => {
    if (query) {
      let filtered = this.state.comments.filter((comment) => {
        return comment.comment.toLowerCase().includes(query.toLowerCase());
      });
      this.setState({ comments: filtered });
    } else {
      this.setState({ comments: this.state.allComment });
    }
  };
  render() {
    return (
      <>
        <div className="mb-0">
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            onChange={(e) => this.handleSearch(e.target.value)}
          />
          {this.state.comments.map((comment, index) => (
            <ListGroup key={index}>
              <ListGroup.Item>
                <p>Comment: {comment.comment}</p> <p>Rating: {comment.rate}</p>
                <Button
                  onClick={() => {
                    this.removeComment(comment._id);
                  }}
                >
                  Remove Comment
                </Button>
              </ListGroup.Item>
            </ListGroup>
          ))}
        </div>
        <AddComment
          bookid={this.props.bookid}
          listFunc={this.componentDidMount}
        />
      </>
    );
  }
}
