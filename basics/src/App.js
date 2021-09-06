import './App.css';
import React, { Component } from 'react'
import LifecycleParent from './components/lifecycle/LifecycleParent';
// import StateHook from './components/hooks/StateHook';
// import ReducerHook from './components/hooks/ReducerHook';
// import EffectHook from './components/hooks/EffectHook';
// import RefHook from './components/hooks/RefHook';
// import LayoutHook from './components/hooks/LayoutHook';
// import ImperativeHook from './components/hooks/ImperativeHook';
import ContextHook from './components/hooks/ContextHook';

class App extends Component {
  render() {
    return (
      <div>
        {/* <LifecycleParent/> */}
        {/* < StateHook /> */}
        {/* <ReducerHook /> */}
        {/* <EffectHook /> */}
        {/* <RefHook /> */}
        {/* <LayoutHook /> */}
        {/* <ImperativeHook /> */}
        <ContextHook />
      </div>
    )
  }
}

export default App




