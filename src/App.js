import React from "react"
import Header from "./components/common/header/Header"
import "./App.css"
import Homepages from "./components/home/Homepages"
import Footer from "./components/common/footer/Footer"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import SinglePage from "./components/singlePage/SinglePage"

import Politics from "./components/Politics/Politics"
import Memes from "./Memes/Memes"
import Sports from "./components/Sports/Sports"
import ReviewSection from "./components/Reviews/Reviews"



const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepages} />
          <Route path='/singlepage/:id' exact component={SinglePage} />
          <Route exact path='/Politics' component={Politics} />
          <Route exact path='/Memes' component={Memes} />
          <Route exact path='/Sports' component={Sports} />
          <Route exact path='/Reviews' component={ReviewSection} />
          
          
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
