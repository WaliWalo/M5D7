import React, { Component } from "react";
import { FormControl, ListGroup, Button } from "react-bootstrap";
import AddComment from "./AddComment";
export default class ShowComment extends Component {
  constructor(props) {
    super(props);

    // Bind the this context to the handler function
    this.handleUpdate = this.handleUpdate.bind(this);

    // Set some state
    this.state = {
      comments: [],
      loading: true,
      allComment: [],
      modified: false,
    };
  }

  componentDidUpdate = async (prevProp, prevState) => {
    if (this.state.modified !== prevState.modified) {
      this.fetchComments(this.state.comments);
      this.setState({ modified: false });
    }
  };

  componentDidMount = async () => {
    await this.fetchComments();
  };

  fetchComments = async () => {
    this.setState({ loading: true });
    try {
      let response = await fetch(
        `https://strive-bookstore-be.herokuapp.com/books/${this.props.book.asin}/comments/`
      );
      let comments = await response.json();
      setTimeout(() => {
        this.setState({
          comments: comments,
          allComment: comments,
          loading: false,
        });
      }, 1000);
    } catch (e) {
      console.log("error happened, that's life", e);
      this.setState({ loading: false });
    }
  };

  removeComment = async (id) => {
    try {
      let response = await fetch(
        `https://strive-bookstore-be.herokuapp.com/books/${this.props.book.asin}/comments/${id}`,
        {
          method: "DELETE",
        }
      );
      this.setState({ loading: false });
      if (response.ok) {
        alert("Comment Deleted!");
        this.setState({ modified: true });
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

  handleUpdate = () => {
    this.setState({
      modified: true,
    });
  };

  render() {
    return (
      <>
        <h1>{this.state.loading ? "Loading..." : this.props.book.title}</h1>

        <div>
          <div className="">
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              onChange={(e) => this.handleSearch(e.target.value)}
            />
            {this.state.comments.map((comment, index) => (
              <ListGroup key={index}>
                <ListGroup.Item>
                  <p>Comment: {comment.comment}</p>{" "}
                  <p>Rating: {comment.rate}</p>
                  <Button
                    onClick={() => {
                      this.removeComment(comment.id);
                    }}
                  >
                    Remove Comment
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            ))}
          </div>
          <AddComment
            bookid={this.props.book.asin}
            modify={this.handleUpdate}
          />
        </div>
      </>
    );
  }
}
