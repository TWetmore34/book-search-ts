import BookList from './components/searchResults/BookList';
import Wishlist from './components/wishlist/Wishlist';
import Search from './components/searchResults/Search';
import Header from './components/header/Header';
import Login from './components/login/Login';
import './App.css';
import { Provider } from "react-redux"
import store from './redux/store';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <Routes>
        <Route path="/" element={<Login />}/>
        <Route path='/home' element={
          <>
          <Search />
          <BookList />
          </>
        }/>
        <Route path='/wishlist' element={
        <div className="app__container">
          <Wishlist />
        </div>} />
        </Routes>
      </Provider>
  
    </Router>
  );
}

export default App;
