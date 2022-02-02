import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

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
        <nav>
          <ul>
            <li>
              <Link className="homeLink" to="/">
                Головна
              </Link>
            </li>
            <li>
              <Link className="coursesLink" to="/courses">
                Курси
              </Link>
            </li>
            <li>
              <Link className="aboutLink" to="/about">
                Про·нас
              </Link>
            </li>
            <li>
              <Link className="contactsLink" to="/contacts">
                Контакти
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </BrowserRouter>
  );
}

export default routesMenu;
