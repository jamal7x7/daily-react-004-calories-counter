import React, { Component } from 'react'
import logo from '../logo.svg'
import '../styles/CaloriesCounterApp.css'
import Modal from 'react-modal'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

const Header = (props) => (
  <header className='App-header'>
    {/* <img src={logo} className='App-logo' alt='logo' /> */}
    <h1 className='App-title'>Calories Counter</h1>
  </header>
)

const FoodItem =(props) => (
  props.breakfast.map( (e, i)=> {
   return (
    <div 
      className="food-item"
      key={i}
    >
      <p> {e.foodName} </p>
      <div className="line"></div>
      <p> {e.foodNameCalories + ' cal'}</p>
    </div>
   )
  })
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
            
              <FoodItem 
                breakfast={props.breakfast}
              
              />
            
          
            
          </div>

          <div className='bar'>
            475 cal
          </div>
        </div>
      </div>
      
     

    </div>

    <div className='right'>

      <div className="graph">
      </div>

      <div className="total">
        <p className='total-label'>Total</p>
        <p className='result'>1270 <span>cal</span></p>
      </div>
   
    </div>

  </div>
)

const Btn = (props) => (
  <div className='btn' onClick={props.openModal}>
    +
  </div>
)



class CaloriesCounterApp extends Component {

  state = {
    modalIsOpen: false,
    breakfast: [ 
      {
        foodName: 'Orange jus',
        foodNameCalories: 110 
      },
      {
        foodName: 'Bread',
        foodNameCalories: 365 
      },
      {
        foodName: 'Choclat',
        foodNameCalories: 200 
      }
    ],
    lunch: [ 
      {
        foodName: 'Pizza',
        foodNameCalories: 110 
      },
      {
        foodName: 'Apple',
        foodNameCalories: 365 
      }
    ],
    dinner: [ 
      {
        foodName: 'Soup',
        foodNameCalories: 310 
      }
    ],
    snack: [ 
      {
        foodName: 'Energy bar',
        foodNameCalories: 210
      }
    ]
  };

  openModal = () => {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal = () => {
    this.setState({modalIsOpen: false});
  }

  render () {
    return (
      <div className='App'>
        <Header />
        <div className='container'>
          <MainWin 
            breakfast={this.state.breakfast}
            
          />
          <Btn openModal={this.openModal}/>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            className="Modal"
            overlayClassName="Overlay"
            >
            <div className="modal">
            <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
            <button onClick={this.closeModal}>close</button>
            <div>I am a modal</div>
            <form>
              <input />
              <button>tab navigation</button>
              <button>stays</button>
              <button>inside</button>
              <button>the modal</button>
            </form>
            
            </div>

          </Modal>
        </div>
      </div>
    )
  }
}

export default CaloriesCounterApp
