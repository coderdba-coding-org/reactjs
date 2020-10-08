/// NOT WORKING YET ///

import React from 'react';

class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         header: "Header from props...",
         content: "Content from props..."
      }
   }
   render() {
      return (
         <div>
            <Header headerProp = {this.state.header}/>
            <Content contentProp = {this.state.content}/>
         </div>
      );
   }
}

class Header extends React.Component {

   constructor(props) {
      super(props);
      this.state = { headerProp: this.props.headerProp }
   }

   render() {
      // In render: use 'state' if you want to change state
      //<h1>{this.props.headerProp}</h1>
      //<h1>{this.state.headerProp}</h1>

      return (
         <div>
            <h1>{this.state.headerProp}</h1>
            <button
              type="button"
              onClick={this.changeHeader}
            >Change Header</button>
         </div>
      );
   }

   changeHeader = () => {
     this.setState({headerProp: "Changed header now"});
   }

}

class Content extends React.Component {
   render() {
      return (
         <div>
            <h2>{this.props.contentProp}</h2>
         </div>
      );
   }
}

export default App;
