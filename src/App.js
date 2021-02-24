import logo from './logo.svg';
import './App.css';
import {Component} from 'react';
import Tablist from './component/tablist'
import Body from './component/body'


class App extends Component {
  constructor(){
    super();
    this.state = {
      active: 1
    }
    this.changetab = (id) => {
      this.setState({
        active: id
      })
    }
  }
  render() {

    const tabs = [{
      id: 1,
      title: 'Text'
    },
    {
     id: 2,
     title:  'Images'
    },
    {
      id: 3,
      title:  'Videos'
     },
     {
      id: 4,
      title:  'Table'
     },
     {
      id: 5,
      title:  'Email'
     }
  
    ]


    return (
    <div className="App">
      <div className="nav-bar">
        <Tablist className='tab-list' tabs = {tabs} activetab={this.state.active} ctab={this.changetab}/>
      </div>

      <div className="main-body">
      <Body activetab={this.state.active}/>
      </div>
    </div>
  );
  }
}

export default App;
