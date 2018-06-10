import React, { Component } from 'react'
import logo from '../logo.svg'
import '../styles/CaloriesCounterApp.css'

const Header = (props) => (
  <header className='App-header'>
    {/* <img src={logo} className='App-logo' alt='logo' /> */}
    <h1 className='App-title'>Calories Counter</h1>
  </header>
)

const MainWin = (props) => (
  <div className='mainWin'>
    <div className='left'>

      <div className='category-title'>
        <p className='meals-cat-title'>
          Meals
        </p>
        <p className='calories-cat-title'>
          Calories
        </p>
      </div>

      <div className='meal'>
        <p className='meal-type'> breakfast </p>
        <div className='table'>
          <div className='food'>
            <p>Orange jus</p>
            <p>bread</p>
          </div>

          <div className='bar'>
            475 cal
          </div>
        </div>
      </div>

    </div>

    <div className='graph'>

        Calories

    </div>

  </div>
)

const Btn = (props) => (
  <div className='btn'>
    +
  </div>
)

class CaloriesCounterApp extends Component {
  render () {
    return (
      <div className='App'>
        <Header />
        <div className='container'>
          <MainWin />
          <Btn />
        </div>
      </div>
    )
  }
}

export default CaloriesCounterApp
