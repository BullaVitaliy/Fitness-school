import React from 'react';
//style
import './blockTitleHome.scss';

//components
import CompanyName from './../../universalCompo/companyName/companyName';
import TextPreview from './textPreview/textPreview';
import GroupSmallCubs from './groupSmallCubs/groupSmallCubs';
import UnderLine from './../../universalCompo/underLine/underLine';

function blockTitleHome() {
  return (
    <div>
      <CompanyName />
      <div className="flexPrevCubs">
        <TextPreview />
        <GroupSmallCubs />
      </div>
      <UnderLine />
    </div>
  );
}

export default blockTitleHome;
