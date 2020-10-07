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

class Model extends Car {
  constructor(brand, model) {
    super(brand);
    this.model = model;
  }  
  show() {
      return this.present() + ', it is a ' + this.model
  }
}

function MyCar(brand, model){

let mycar = new Model(brand, model);
return mycar.show();
}

class RenderMyCar extends React.Component {
 	render(){
          return MyCar("my own brand", "my own model");
        }
}

export default RenderMyCar;
