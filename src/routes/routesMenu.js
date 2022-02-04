import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

//STYLES
import './dist/styleMenu.css';

//PAGES
import ContactsPage from './../pages/contactsPage';
import AboutPage from './../pages/aboutPage';
import CoursesPage from './../pages/coursesPage';
import HomePage from './../pages/homePage';

function routesMenu() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<h2>Erorr 404</h2>} />
      </Routes>

      <div>
        <nav className="wrapper">
          <ul className="container">
            <li>
              <Link className="home link " to="/">
                <p className="menu_item first_item">Головна</p>
              </Link>
            </li>
            <li>
              <Link className="courses link" to="/courses">
                <p className="menu_item first_second">Курси</p>
              </Link>
            </li>
            <li>
              <Link className="about link" to="/about">
                <p className="menu_item first_third">Про·нас</p>
              </Link>
            </li>
            <li>
              <Link className="contacts link" to="/contacts">
                <p className="menu_item last_item">Контакти</p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </BrowserRouter>
  );
}

export default routesMenu;
