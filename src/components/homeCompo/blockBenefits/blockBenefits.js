import React from 'react';

//components
import TextHeader from './textHeader/textHeader';
import CardBenefits from './cardBenefits/cardBenefits';

const blockBenefits = () => {
  return (
    <div>
      <TextHeader />
      <CardBenefits />
    </div>
  );
};

export default blockBenefits;
