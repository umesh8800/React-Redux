import React from 'react';
import {Provider} from 'react-redux';
import CakeContainer from './Components/CakeContainer';
import Store from './redux/Store'
import './App.css';
import HooksCakeContainer from './Components/HooksCakeContainer';
import IceCreamContainer from './Components/IceCreamContainer';
import NewCakeContainer from './Components/NewCakeContainer';
import ItemContainer from './Components/ItemContainer';
import UserContainer from './Components/UserContainer';

function App() {
  return ( 
      <Provider store={Store}>
        <div className="App">
          <UserContainer/>
          {/* <ItemContainer cake/> */}
          {/* <ItemContainer/> */}
          {/* <HooksCakeContainer/> */}
          {/* <IceCreamContainer/> */}
          {/* <CakeContainer/> */}
          {/* <NewCakeContainer/>   */}
      </div>
      </Provider>
   
  );
}

export default App;
