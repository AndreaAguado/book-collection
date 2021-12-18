import '../styles/App.scss';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import callToApi from '../services/callToApi.js';
import { useState, useEffect } from 'react';
import { Route, Switch, useRouteMatch, Link } from 'react-router-dom';
import BookDetail from './BookDetail';

const App = () => {
  const defaultData = {
    title: '',
    first_name: '',
    last_name: '',
    isbn: '',
  };
  const [data, setData] = useState(defaultData);
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
    if (whichInput === 'title') {
      setData({ ...data, title: value });
    } else if (whichInput === 'title') {
      setData({ ...data, title: value });
    } else if (whichInput === 'first_name') {
      setData({ ...data, first_name: value });
    } else if (whichInput === 'last_name') {
      setData({ ...data, last_name: value });
    } else if (whichInput === 'isbn') {
      setData({ ...data, isbn: value });
    }
  };

  // const routeData = useRouteMatch('/book-details/:id');
  // const bookId = routeData !== null ? routeData.params.id : '';
  // const clickedBook = booksToRender.find((book) => book.id === parseInt(bookId));

  const renderBooksList = () => {
    return booksToRender.map((book) => {
      return (
        <li key={book.id} id={book.id}>
          <Link to={`/book-details/${book.id}`}>
            <p>{book.title}</p>
          </Link>
        </li>)
    })
  }

  return (
    <div className="page">
      <Switch>
        <Route exact path="/">
          <Header></Header>
          <Main handleInput={handleInput} renderBooksList={renderBooksList}></Main>
          <Footer></Footer>
        </Route>
        <Route path="/book-details/:id">
          <Header></Header>
          <BookDetail bookToRender={bookToRender}></BookDetail>
          <Footer></Footer>
        </Route>
      </Switch>
    </div>);
};

export default App;