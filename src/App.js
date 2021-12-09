import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Header from './components/Nav';
import Book from './components/Books';
import bookList from './components/BookList';
import Categories from './components/Categories';

const App = () => {
  const bookList = books.map((books) => <Book key={books.id} info={books} />);
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          { bookList }
          <bookList />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
