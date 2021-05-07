import React from 'react'
import ReactDOM from 'react-dom'

import Nav from './Nav'
import Form from "./products/Form"
import List from "./products/List"
import Edit from "./products/Edit"
import AddComment from "./Comments/AddComment"

import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

  const Main =  () => {
    return (
        <Router>
          <main>
            <Nav/>
            <Switch>
              <Route path="/product/index" exact component={List} />
              <Route path="/products/form"  component={Form} />
              <Route path="/product/edit/:id" component={Edit} />
              <Route path="/comments/index"  component={AddComment} />
            </Switch>
          </main>
        </Router>
      )     
  }
  export default Main;
// for <div id="main-employee"></div>
ReactDOM.render(<Main />, document.getElementById('main-products'));