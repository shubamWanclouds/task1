import './App.css';
import React, { Component } from 'react'

// import LifecycleParent from './components/lifecycle/LifecycleParent';

// import StateHook from './components/hooks/StateHook';
// import ReducerHook from './components/hooks/ReducerHook';
// import EffectHook from './components/hooks/EffectHook';
// import RefHook from './components/hooks/RefHook';
// import LayoutHook from './components/hooks/LayoutHook';
// import ImperativeHook from './components/hooks/ImperativeHook';
// import ContextHook from './components/hooks/ContextHook';
// import MemoHook from './components/hooks/MemoHook';
// import CallbackHook from './components/hooks/CallbackHook';

// import FunctionClick from './components/eventHandling/FunctionClick';
// import ClassClick from './components/eventHandling/ClassClick';

// import IfElse from './components/conditionalRendering/IfElse';
// import ElementVariables from './components/conditionalRendering/ElementVariables';
// import TernaryConditional from './components/conditionalRendering/TernaryConditional';
// import ShortCkt from './components/conditionalRendering/ShortCkt';

// import ListRendering from './components/lists/ListRendering';

// import Forms from './components/forms/Forms';

// import ParentComp from './components/pureComponents/ParentComp';

import PostList from './components/http/PostList';

// import ClickCounter from './components/hoc/ClickCounter';
// import HoverCounter from './components/hoc/HoverCounter';

// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Home from './components/router/Home';
// import About from './components/router/About';
// import Projects from './components/router/Projects';
// import PageNotFound from './components/router/PageNotFound';
// import UserHome from './components/router/UserHome';

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
        {/* <ContextHook />   */}
        {/* <MemoHook />   */}
        {/* <CallbackHook />   */}
        {/* <FunctionClick />   */}
        {/* <ClassClick />   */}
        {/* <IfElse />  
        <ElementVariables />  
        <TernaryConditional />  
        <ShortCkt />   */}
        {/* <ListRendering />   */}
        {/* <Forms />   */}
        {/* <ParentComp />   */}
        <PostList />  
        {/* <PostForm />   */}
        {/* <ClickCounter name={"shubam"}/>  
        <HoverCounter name={"harkaran"} />   */}

        {/* <Router>
          <div style={{ width: 100 + "vw", height: 80, backgroundColor: "lightblue" }}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
          </div>

        <Switch>
          <Route path="/about" exact component={About} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/" exact component={Home} />
          <Route path="/user/:name/age" exact component={UserHome} />
          <Route path="*" exact component={PageNotFound} />
        </Switch>

        </Router> */}

      </div>
    )
  }
}

export default App




