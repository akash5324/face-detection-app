import React from 'react';
import './ImageLinkForm.css';//importing form CSS
//Image Form Section
const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
  return (
    <div>
      <div className='center maintab'>
        <div className='form center pa4 br3 shadow-5'>
          <input className='f4 pa2 w-70 center' type='text' placeholder="Type Your Image Link Here!" onChange={onInputChange}/>
          <button className='w-30 grow f3 link ph3 pv2 dib white bg-light-red button' onClick={onButtonSubmit}>Get Your Face</button>
        </div>
      </div>
    </div>
  );
}
//exporting ImageLink form
export default ImageLinkForm;