import React from 'react';
//styles
import './myCase.scss';

//components
import HeaderCase from './headerCase/headerCase';
import BeforeAfter from './beforeAfter/beforeAfter';
import BtnMoreCase from './btnMoreCase/btnMoreCase';

const myCase = () => {
  return (
    <div class="wrapperCase">
      <HeaderCase />
      <BeforeAfter />
      <BtnMoreCase />
    </div>
  );
};

export default myCase;
