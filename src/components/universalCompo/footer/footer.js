import React from 'react';
//styles
import './footer.scss';
//icon
import Icon from './Line2.svg';

const footer = () => {
  return (
    <div className="containerFooter">
      <div className="columnOne">
        <p className='companyNamePosition'>
          <strong className='companyName'>SchoolFitnessName</strong>
        </p>
        <p>
          Ми допомагаємо вам <br /> стати кращою <br /> версією себе.
        </p>
      </div>
      <div className="columnTwo">
        <img src={Icon} alt="arrayUp" />
      </div>
      <div className="columnThree">
        <p className='linkFooter'>Курси</p>
        <p className='linkFooter'>Про нас</p>
        <p className='linkFooter'>Контакти</p>
      </div>
    </div>
  );
};

export default footer;
