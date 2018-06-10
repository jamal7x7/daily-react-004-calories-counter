import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import CaloriesCounterApp from './components/CaloriesCounterApp'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<CaloriesCounterApp />, document.getElementById('root'))
registerServiceWorker()
