import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import BooksPage from './components/pages/BooksPage';
import CategoriesPage from './components/pages/CategoriesPage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<BooksPage />} />
        <Route path="categories" element={<CategoriesPage />} />
      </Routes>
    </>
  );
}

export default App;
