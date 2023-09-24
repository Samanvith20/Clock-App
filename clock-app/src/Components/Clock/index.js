import {Component} from 'react'
import './index.css'

class Clock extends Component {
  constructor(props) {  //The constructor() method is used to set up the initial state and class variables.
    super(props)
    this.state = { date: new Date() }
    //  We must call the super(props) method before any other statement. Calling super(props) makes sure that constructor() of the React.Component gets called and initializes the instance.


  }
  componentDidMount() {
    this.timerID = setInterval(this.tick, 1000)
    //The componentDidMount() method is used to run statements that require that the component is already placed in the DOM.

//Example: set timers, initiate API calls, etc.


  }
  componentWillUnmount() {
    clearInterval(this.timerID)
    //The componentWillUnmount() method is used to cleanup activities performed.
  }
  tick = () => {
    this.setState({
      date: new Date()
    })
  }
  render() {
    const { date } = this.state
    return (
      <div className="clock-container">
        <h1 className="heading">Clock</h1>
        <p className="time">{date.toLocaleTimeString()}</p>
      </div>
    )
  }
}

export default Clock