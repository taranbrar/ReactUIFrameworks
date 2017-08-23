import Test from "./Test"
import React from "react"
import ReactDOM from "react-dom"
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import testMui from './testMui'
import testSemanticUi from './testSemanticUi'
import testReactBootstrap from './testReactBootstrap'
import testReactMd from './testReactMd'
import testReactWidget from './testReactWidget'
import testBulma from './testBulma'

ReactDOM.render((
<Router history = {browserHistory}>
    <Route path="/" component={Test} />
    <Route path="/testMui" component={testMui} />
    <Route path="/testSemanticUi" component={testSemanticUi} />
    <Route path="/testReactMd" component={testReactMd} />
    <Route path="/testReactWidget" component={testReactWidget} />
    <Route path="/testReactBootstrap" component={testReactBootstrap} />
    <Route path="/testBulma" component={testBulma} />
  </Router>
), document.getElementById('root'));
