import React, { useState } from 'react';
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
              <Link className="link " to="/">
                <p tabIndex={1} className="menu_item home">
                  Головна
                </p>
              </Link>
            </li>
            <li>
              <Link className="link" to="/courses">
                <p tabIndex={2} className="menu_item courses">
                  Курси
                </p>
              </Link>
            </li>
            <li>
              <Link className="link" to="/about">
                <p tabIndex={3} className="menu_item about">
                  Про·нас
                </p>
              </Link>
            </li>
            <li>
              <Link className="link" to="/contacts">
                <p tabIndex={4} className="menu_item contacts">
                  Контакти
                </p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </BrowserRouter>
  );
}

export default routesMenu;
