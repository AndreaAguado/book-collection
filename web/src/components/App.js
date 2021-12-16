import '../styles/App.scss';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
const App = () => {
  return (
    <div className="page">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>);
};

export default App;