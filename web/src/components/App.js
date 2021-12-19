import '../styles/App.scss';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import callToApi from '../services/callToApi.js';
import { useState, useEffect } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import BookDetail from './BookDetail';
import Book from './Book';

const App = () => {

  const [data, setData] = useState({
    name: '',
    first_name: '',
    last_name: '',
    isbn: '',
  });
  const [booksToRender, setBooksToRender] = useState([]);
  const [bookToRender, setBookToRender] = useState({});

  const routeData = useRouteMatch('/book-details/:id');
  const bookId = routeData !== null ? routeData.params.id : '';
  const clickedBook = booksToRender.find((book) => book.id === parseInt(bookId));

  useEffect(() => {
    callToApi.getAllBooks().then(response => {
      console.log(response);
      setBooksToRender(response);
    })
  }, []);

  useEffect(() => {
    if (clickedBook !== undefined) {
      callToApi.getBookById(clickedBook.id).then(response => {
        setBookToRender(response);
      })
    }
  }, [clickedBook]);

  const handleInput = (value, name) => {
    const whichInput = name;
    if (whichInput === 'name') {
      setData({ ...data, name: value });
    } else if (whichInput === 'first_name') {
      setData({ ...data, first_name: value });
    } else if (whichInput === 'last_name') {
      setData({ ...data, last_name: value });
    } else if (whichInput === 'isbn') {
      setData({ ...data, isbn: value });
    }
  };

  const renderBooksList = () => {
    return booksToRender.map((book) => {
      return (
        <Book book={book}></Book>
      )
    })
  }

  return (
    <div className="page">
      <Switch>
        <Route exact path="/">
          <Header></Header>
          <Main handleInput={handleInput} renderBooksList={renderBooksList} data={data}></Main>
          <Footer></Footer>
        </Route>
        <Route path="/book-details/:id">
          <Header></Header>
          <BookDetail bookToRender={bookToRender} handleInput={handleInput} data={data}></BookDetail>
          <Footer></Footer>
        </Route>
      </Switch>
    </div>);
};

export default App;