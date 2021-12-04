import { createStore, applyMiddleware } from 'redux';
// import thunkMiddleware from 'redux-thunk';
import reducer, { fetchApiData } from './reducer';

const Store = createStore(reducer, applyMiddleware(fetchApiData));

export default Store;

// import { createStore, applyMiddleware } from "redux";
// import thunk from 'redux-thunk';

// const initialState = {
//   message: "Amazing"
// };

// function rootReducer(state, action) {
//   switch (action.type) {
//     case "GET_GREETINGS_SUCCESS":
//       return { message: action.json.message };
//   }
//   return state
// }

// export default function configureStore() {
//   const store = createStore(
//     rootReducer,
//     initialState,
//     applyMiddleware(thunk)
//   );
//   return store;
// }
