import React ,{Component}from 'react';
import './App.css';
import Map from './Components/Map/index'
import store from './store'
import {Provider} from 'react-redux'
import './bootstrap.min.css'
class App extends Component {
  render(){
    return(
      <Provider store={store}>
      <div>
        <Map/>
      </div>
      </Provider>
    )}
}

export default App;
