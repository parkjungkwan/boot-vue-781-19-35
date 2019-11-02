import {
    createStore as reduxCreateStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';

import logger from 'redux-logger';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import * as reducers from './reducers';

export const createStore = history =>{
    return reduxCreateStore(
      combineReducers({
          ...reducers,
          router: connectRouter(history)
      }),
      applyMiddleware(
          logger,
          thunk,
          routerMiddleware(history)
      )  
    )
}