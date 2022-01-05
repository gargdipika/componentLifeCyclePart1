import {Component} from 'react'
import Clock from './components/Clock'

import './App.css'

class App extends Component {
  state = {isShow: false}

  changeButtonText = () => {
    const {isShow} = this.state
    this.setState({isShow: !isShow})
  }

  render() {
    const {isShow} = this.state
    return (
      <div className="app-container">
        <button
          type="button"
          className="toggle-button"
          onClick={this.changeButtonText}
        >
          {isShow ? 'Hide Clock' : 'Show Clock'}
        </button>
        {isShow && <Clock />}
      </div>
    )
  }
}

export default App
