import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js'//importing particle.js(the background Magic thing)
import Navigation from './components/Navigation/Navigation';//importing Navigation component
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';//importing Navigation component
import FaceRecognition from './components/FaceRecognition/FaceRecognition';//importing Navigation component
import Rank from './components/Rank/Rank';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
 apiKey: 'Your apiKey'
});
//Initialising particle component
const particlesMagic={

                particles: {
                 
                      number:{
                          value:70,
                          density:{
                          enable:true,
                          value_area:200
                      }

                    }

                    }
                  }
   //Rendering all  components     
class App extends Component {

  constructor(){

    super();
    this.state={

      input:'',
      imageUrl:'',
      box:{}
    }
  }

faceLocation=(data)=>{

const location=data.outputs[0].data.regions[0].region_info.bounding_box;
const image=document.getElementById('inputimage');

const width=Number(image.width);
const height=Number(image.height);

console.log(width,height);

console.log(location);

console.log(location.left_col * width);
console.log(location.top_row * height);
console.log(width-(location.right_col*width));
console.log(height-(location.bottom_row*height));

return{

  leftcol:location.left_col * width,
  toprow:location.top_row * height,
  rightcol:width-(location.right_col*width),
  bottomrow:height-(location.bottom_row*height)

}

}

displayFaceBox=(box)=>{
  this.setState({box:box});
  console.log(box);
}
  onInputChange=(event)=>{
    this.setState({input: event.target.value});
    //console.log(this.state.input);
  }

  onButtonSubmit=()=>{

    this.setState({imageUrl: this.state.input});
    //face Recognition App
    //console.log(this.state.imageUrl);
  
  app.models.predict(
    "a403429f2ddf4b49b307e318f00e528b",this.state.input)
  .then((response)=>this.displayFaceBox(this.faceLocation(response)))
  .catch((err)=>console.log(err));

}
  render() {
    return (
               
          <div className="App">
          <Particles className="particles" params={particlesMagic} />
          <Navigation /> 
          <Rank />
          <ImageLinkForm 
          
          onInputChange={this.onInputChange} 
          
          onButtonSubmit={this.onButtonSubmit} 
          />
        <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl}/>
      </div>

    );
  }
}

export default App;
