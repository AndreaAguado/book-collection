import '../styles/App.scss';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import callToApi from '../services/callToApi.js';
import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
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

  useEffect(() => {
    callToApi.getAllBooks().then(response => {
      console.log(response);
      setBooksToRender(response);
    })
  }, [])

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

  const renderBooksList = () => {
    return booksToRender.map((book, index) => {
      return (
        <li key={index} id={index}>
          <p>{book.title}</p>
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
        <Route path="/book">
          <Header></Header>
          <BookDetail></BookDetail>
          <Footer></Footer>
        </Route>
      </Switch>
    </div>);
};

export default App;