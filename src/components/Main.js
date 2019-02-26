import React from 'react'
import {Switch, Route} from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import  'animate.css'
import Mars from './Mars';
import Iss from './Iss';
import Home from './Home'
import './style.css'

export default function Main() {
  return (
    <div className="mb-2">
      <Route render={({location}) => (
        <TransitionGroup>
        <CSSTransition
        key={location.key}
        timeout={300}
        classNames={{
          enter:'animated',
          enterActive:'slideInRight',
          exit: 'animated',
          exitActive: 'fadeOut'
          
        }}
        >
        <Switch location={location}>
          <Route exact path='/' component={Home} />
          <Route exact path='/mars' component={Mars} />
          <Route exact path='/iss' component={Iss} />
        </Switch>
        </CSSTransition>
        </TransitionGroup>
      )} />
      
    </div>
  )
}
