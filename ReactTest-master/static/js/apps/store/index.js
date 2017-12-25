
import 'regenerator-runtime/runtime';
import { createStore, applyMiddleware, compose  } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';
//Import our rootreducer from '../reducers/index.js' this hold our whole state
import rootReducer from  '../reducers';
import root from '../sagas/index';


const sagaMiddleware = createSagaMiddleware();


/**
 * When we call this function we return a created store with our reducers, so this is the same
 * as calling `const store = createStore(reducer)`. We have extracted it to a separate file. This function
 * gets called in 'index.js'. The second argument to 'createStore' is so we can use Redux DevTools
 * in our browser for easier debugging. Super cool!
 * @param {Object} initialState 
 */
export default function store(history) {
  const middlewares = [
    sagaMiddleware,
    routerMiddleware(history),
  ];

  const enhancers = [
    applyMiddleware(...middlewares),
  ];
  const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
    
    const store =  createStore(
      rootReducer,
      composeEnhancers(...enhancers)
    );
    sagaMiddleware.run(root);
   
    
    return store;
}

//The last argument is just so you can use the Redux DevTools for Chrome/Firefox, download
//the extension to your browser and see what happens. 
//Chrome:
//https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd
//FireFox:
//https://addons.mozilla.org/en-US/firefox/addon/remotedev/