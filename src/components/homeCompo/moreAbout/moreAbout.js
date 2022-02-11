import React from 'react';
//styles
import './moreAbout.scss';

const moreAbout = () => {
  return (
    <div className="containerMoreAbout">
      <div className="iconLeftAbout">M</div>
      <div class="textRigthAbout">
        <p className="item">Про нас</p>
        <p className="textMoreAbout">
          Дізнайтеся <br /> більше про <br /> SchoolFitnees <br /> Name.
        </p>
        <button className="buttonMoreAbout">Дізнатися більше</button>
      </div>
    </div>
  );
};

export default moreAbout;
