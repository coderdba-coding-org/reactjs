import React from 'react';
import ReactDOM from 'react-dom';

//const myfirstelement = <h1>Hello React!!</h1>
//ReactDOM.render(myfirstelement, document.getElementById('root'));

class Car {
  constructor(brand) {
    this.brand = brand;
  }
  
  present() {
    return 'I have a ' + this.brand + ' car';
  }
}

function MyCar(brand){

let mycar = new Car(brand);
return mycar.present();
}

class RenderMyCar extends React.Component {
 	render(){
          //return "Hello from RenderMyCar";
          return MyCar("my own brand");
        }
}

export default RenderMyCar;
