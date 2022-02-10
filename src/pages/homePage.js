import React from 'react';
//styles
import './homePage.scss';

//components
import BlockBenefits from '../components/homeCompo/blockBenefits/blockBenefits';
import BlockTitleHome from '../components/homeCompo/blockTitleHome/blockTitleHome';

function homePage() {
  return (
    <div className="wrapperHome">
      <div className="containerHome">
        <BlockTitleHome />
        <BlockBenefits />
      </div>
    </div>
  );
}

export default homePage;
