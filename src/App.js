import React from 'react';
import './App.css';

//PAGES
import AboutPage from './pages/aboutPage';
import ContactsPage from './pages/contactsPage';
import CoursesPage from './pages/coursesPage';
import HomePage from './pages/homePage';

//Routes and menu
import RoutesMenu from './routes/routesMenu';

function App() {
  return (
    <div className="App">
      <RoutesMenu />
    </div>
  );
}

export default App;
