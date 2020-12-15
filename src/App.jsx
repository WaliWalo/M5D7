import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Registration from "./components/Registration";
import BookList from "./components/BookList";
import fantasy from "./data/fantasy.json";
import history from "./data/history.json";
import horror from "./data/horror.json";
import romance from "./data/romance.json";
import scifi from "./data/scifi.json";
import JumbotronComponent from "./components/JumbotronComponent";
import { getBooks } from "./data/booksApi";
let bookCategories = ["fantasy", "horror", "history", "romance", "scifi"];
let books = {
  fantasy,
  horror,
  history,
  romance,
  scifi,
};
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: books.fantasy.slice(0, 12),
      category: "fantasy",
      apiBooks: [],
    };
  }
  handleDropdownChange = (category) => {
    this.setState({
      books: books[category].slice(0, 12),
      category: category,
    });
  };

  componentDidMount = () => {
    this.fetchBooks();
  };

  fetchBooks = async () => {
    let books = await getBooks();
    this.setState({ apiBooks: books });
  };
  handleSearch = (query) => {
    let categorySelected = this.state.category;
    if (query) {
      let filtered = books[categorySelected].filter((book) => {
        return book.title.toLowerCase().includes(query.toLowerCase());
      });
      this.setState({ books: filtered });
    } else {
      this.setState({ books: books[categorySelected].slice(0, 12) });
    }
  };

  render() {
    return (
      <>
        <Router>
          <NavBar />
          <JumbotronComponent />
          <Route
            path="/"
            exact
            render={(props) => <BookList books={this.state.books} {...props} />}
          />
          <Route
            path="/registration"
            exact
            render={(props) => <Registration {...props} />}
          />
          <Footer />
        </Router>
      </>
    );
  }
}

export default App;
