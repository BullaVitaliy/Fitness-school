import React from 'react';
//styles
import './homePage.scss';

//components
import BlockBenefits from '../components/homeCompo/blockBenefits/blockBenefits';
import BlockTitleHome from '../components/homeCompo/blockTitleHome/blockTitleHome';
import MyCase from '../components/homeCompo/myCase/myCase';
import MoreAbout from '../components/homeCompo/moreAbout/moreAbout';
import BlockToAction from '../components/homeCompo/blockToAction/blockToAction';
import Footer from '../components/universalCompo/footer/footer';

function homePage() {
  return (
    <div className="wrapperHome">
      <div className="containerHome">
        <BlockTitleHome />
        <BlockBenefits />
        <MyCase />
        <MoreAbout />
        <BlockToAction />
        <Footer />
      </div>
    </div>
  );
}

export default homePage;
