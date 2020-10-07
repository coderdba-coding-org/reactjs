import React from 'react';

// nested elements, conditional expressions, arithmetic, attributes

class Jsx01 extends React.Component {
   render() {

      let i = 1; //or var instead of let

      var myStyle = {
         fon1Size: 14,
         color: '#FF0000'
      }

      return (
         <div>
            <h1>Header </h1>
            <h2>Content</h2>
            <p>This is the content!!!</p>
            <p data-myattribute = "somevalue">This is the content again!!!</p>
            <h1>{1+1}</h1>
            <h1>{i == 1 ? 'True!' : 'False'}</h1>
            <h1 style = {myStyle}>Header</h1>
         </div>
      );
   }
}

export default Jsx01;
