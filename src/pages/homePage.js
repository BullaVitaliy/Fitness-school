import React from 'react';
//styles
import './homePage.scss';

//components
import BlockBenefits from '../components/homeCompo/blockBenefits/blockBenefits';
import BlockTitleHome from '../components/homeCompo/blockTitleHome/blockTitleHome';
import MyCase from '../components/homeCompo/myCase/myCase';

function homePage() {
  return (
    <div className="wrapperHome">
      <div className="containerHome">
        <BlockTitleHome />
        <BlockBenefits />
        <MyCase />
      </div>
    </div>
  );
}

export default homePage;
