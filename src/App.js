import React, { Component } from 'react';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import Form2 from './components/Form2';
import Counter2 from './components/Counter2';

class App extends Component {
  render () {
    return (
      <div className="App">
            
              <Counter2 />
              {/*<Counter />
              <Form2 />
              <LifecycleA />
              <FragmentDemo />
              <Form />
              <Stylesheet />
              <NameList />
              <EventBind />
              <FunctionClick />
              <ClassClick />
              <Message />
              <Greet name="Bruce">
              <p>This is children</p></Greet>
              <Greet name="Ahalya"/>
              <Greet name="tanha"/>
              <Welcome name="Bruce"/>
              <Welcome name="Ahalya"/>
              <Welcome name="tanha"/>
              <Hello />*/}
      </div>
    );
  }
}

export default App;
