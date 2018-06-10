import React, { Component } from 'react'
import logo from '../logo.svg'
import '../styles/CaloriesCounterApp.css'

const Header = (props) => (
  <header className='App-header'>
    {/* <img src={logo} className='App-logo' alt='logo' /> */}
    <h1 className='App-title'>Welcome to React</h1>
  </header>
)

const Container = (props) => (
  <div className='container'>
    <div className='mainWin'>
      hello
    </div>
    <div className='btn'>
      +
    </div>
  </div>
)

class CaloriesCounterApp extends Component {
  render () {
    return (
      <div className='App'>
        <Header />
        <Container />
      </div>
    )
  }
}

export default CaloriesCounterApp
