import '../styles/App.scss';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';

import { useState } from 'react';

const App = () => {
  const defaultData = {
    title: '',
    first_name: '',
    last_name: '',
    isbn: '',
  };
  const [data, setData] = useState(defaultData);

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
  return (
    <div className="page">
      <Header></Header>
      <Main handleInput={handleInput}></Main>
      <Footer></Footer>
    </div>);
};

export default App;