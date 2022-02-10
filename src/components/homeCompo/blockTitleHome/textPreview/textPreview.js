import React from 'react';

import './textPreview.scss';

//import button demo
import ButtonWatchDemo from './../../../universalCompo/buttonWatchDemo/buttonWatchDemo';

function textPreview() {
  return (
    <div className="containerTextPreview">
      <p className="item">Головна</p>
      <h1 className="textPreview">
        Lorem Ipsum псевдола
        <br />
        тинський.
      </h1>
      <ButtonWatchDemo />
    </div>
  );
}

export default textPreview;
