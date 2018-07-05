import React from 'react';
//importing form CSS
import './FaceRecognition.css';
//Image Form Section
import 'tachyons';
const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <img id='inputimage' alt='' src={imageUrl} width='500px' heigh='auto'/>
        <div className='bounding-box' style={{top: box.toprow, right: box.rightcol, bottom: box.bottomrow, left: box.leftcol}}></div>
      </div>
    </div>
  );
}
//exporting FaceRecognition
export default FaceRecognition;

