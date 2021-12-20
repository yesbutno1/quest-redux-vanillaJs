// ACTIONS
const incrementAction = {
  type: "INCREMENT",
};

const decrementAction = {
  type: "DECREMENT",
};

const incrementByTen = {
    type: "INCREMENT10",
};

const decrementByTen = {
  type: "DECREMENT10",
};

const reset = {
  type: "RESET",
};

const initialState = 0;

// REDUCER
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
          return state - 1;
       case "INCREMENT10":
      return state + 10;
    case "DECREMENT10":
          return state - 10;
      case "RESET":
          return 0;
    default:
      return state;
  }
};


const counterRender = document.getElementById("counter-render");
const render = () => {
  counterRender.innerText = store.getState();
};


// STORE
const { createStore } = Redux;
const store = createStore(counterReducer);

store.subscribe(render);
render();

console.log(store);


const incrementButton = document.getElementById("button-increment");
const decrementButton = document.getElementById("button-decrement");
const incrementByTenButton = document.getElementById("button-increment10");
const decrementByTenButton = document.getElementById("button-decrement10");
const resetButton = document.getElementById("button-reset");

incrementButton.addEventListener("click", () =>
  store.dispatch(incrementAction)
);
decrementButton.addEventListener("click", () =>
  store.dispatch(decrementAction)
);
incrementButton.addEventListener("click", () =>
  store.dispatch(incrementByTen)
);
decrementButton.addEventListener("click", () =>
  store.dispatch(decrementByTen)
);
resetButton.addEventListener("click", () =>
  store.dispatch(reset)
);

//store.dispatch(incrementAction);
//console.log(store.getState());
// 1
//store.dispatch(incrementAction);
//console.log(store.getState());
// 2
//store.dispatch(incrementAction);
//console.log(store.getState());
// 3
//store.dispatch(incrementAction);
//console.log(store.getState());
// 4
//store.dispatch(decrementAction);
//console.log(store.getState());
// 3

//console.log(counterReducer(0, incrementAction));
// 1
//console.log(counterReducer(4, decrementAction));
// 3
//console.log(counterReducer(8, incrementAction));
// 9

//console.log(counterReducer(0, {type:'INCREMENT'}));
// 1
//console.log(counterReducer(4, {type:'DECREMENT'}));
// 3
//console.log(counterReducer(8, {type:'INCREMENT'}));
// 9
