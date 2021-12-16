import '../styles/App.scss';
import Footer from './Footer';
import Header from './Header';
const App = () => {
  return (
    <div className="page">
      <Header></Header>
      <main className="main">
        <section className="titles">
          <h2>Titles</h2>
        </section>
        <section className="add_book">
          <h2>Add new book</h2>
          <form action="POST">
            <label htmlFor="title">Title</label>
            <input type="text" placeholder="Romeo and Juliet" name="title" id="title" />
            <label htmlFor="first_name">First name</label>
            <input type="text" placeholder="William" name="first_name" id="first_name" />
            <label htmlFor="last_name">Last name</label>
            <input type="text" placeholder="Shakespeare" name="last_name" id="last_name" />
            <label htmlFor="isbn">ISBN</label>
            <input type="text" placeholder="978-1451552058" name="isbn" id="isbn" />
            <input type="submit" />
          </form>
        </section>
        <section className="update_book">
          <h2>Update book info</h2>
          <form action="POST">
            <label htmlFor="title">Title</label>
            <input type="text" placeholder="Romeo and Juliet" name="title" id="title" />
            <label htmlFor="first_name">New first name</label>
            <input id="first_name" type="text" placeholder="William" />
            <label htmlFor="last_name">New last name</label>
            <input type="text" placeholder="Shakespeare" />
            <label htmlFor="isbn">ISBN</label>
            <input type="text" placeholder="978-1451552058" name="isbn" id="isbn" />
            <input type="submit" />
          </form>
        </section>
      </main>
      <Footer></Footer>
    </div>);
};

export default App;