import { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

const INCREMENT_COUNT = "increment-count";
const DECREMENT_COUNT = "decrement-count";
const SET_VALUE_TO_ADD = "set-value-to-add";
const ADD_VALUE_TO_COUNT = "add-value-to-count";

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1, //don't modify state
      };
    case DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1, //don't modify state
      };
    case SET_VALUE_TO_ADD:
      return {
        ...state,
        valueToAdd: action.payload, //don't modify state
      };
    case ADD_VALUE_TO_COUNT:
      return {
        ...state,
        count: state.valueToAdd + state.count,
        valueToAdd: 0, //don't modify state
      };
    default:
      return state;
  }
};

function CounterPage({ initialCount }) {
  //   const [count, setCount] = useState(initialCount);
  //   const [valueToAdd,setValueToAdd]=useState(0)
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });

  const increment = () => {
    // setCount(count + 1);
    dispatch({
      type: INCREMENT_COUNT,
    });
  };

  const decrement = () => {
    // setCount(count - 1);
    dispatch({
      type: DECREMENT_COUNT,
    });
  };

  const handleChange = (e) => {
    const value = parseInt(e.target.value) || 0; //when we input no it is taken as string so we have to parse it and if we press delete button it is not a number therefore we have added zero for it
    // setValueToAdd(value)
    dispatch({
      type: SET_VALUE_TO_ADD,
      payload: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setCount(count+valueToAdd)
    // setValueToAdd(0)
    dispatch({
      type: ADD_VALUE_TO_COUNT,
    });
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {state.count}</h1>
      <div className="flex flex-row">
        <Button secondary onClick={increment}>
          Increment
        </Button>
        <Button secondary onClick={decrement}>
          Decrement
        </Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          value={state.valueToAdd || ""}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <Button>Add it!</Button>
      </form>
    </Panel>
  );
}
export default CounterPage;

// import { useState } from "react";
// import Button from "../components/Button";
// import Panel from "../components/Panel";

// function CounterPage({ initialCount }) {
//   const [count, setCount] = useState(initialCount);
//   const [valueToAdd,setValueToAdd]=useState(0)

//   const increment = () => {
//     setCount(count + 1);
//   };

//   const decrement = () => {
//     setCount(count - 1);
//   };

//   const handleChange=(e)=>{
//     const value=parseInt(e.target.value)||0//when we input no it is taken as string so we have to parse it and if we press delete button it is not a number therefore we have added zero for it
//     setValueToAdd(value)
//   }

//   const handleSubmit=(e)=>{
//     e.preventDefault()
//     setCount(count+valueToAdd)
//     setValueToAdd(0)
//   }

//   return (
//     <Panel className="m-3">
//       <h1 className="text-lg">Count is {count}</h1>
//       <div className="flex flex-row">
//         <Button secondary onClick={increment}>
//           Increment
//         </Button>
//         <Button secondary onClick={decrement}>
//           Decrement
//         </Button>
//       </div>

//       <form onSubmit={handleSubmit}>
//         <label>Add a lot!</label>
//         <input value={valueToAdd||""} onChange={handleChange} type="number" className="p-1 m-3 bg-gray-50 border border-gray-300"/>
//         <Button >Add it!</Button>
//       </form>
//     </Panel>
//   );
// }
// export default CounterPage;

//reducer-when we call dispatch it finds reducer function puts initial state as first argument and passed value as second argument

// if (action.type === "increment-count") {
//     return {
//       ...state,
//       count: state.count + 1, //don't modify state
//     };
//   }
//   if (action.type === "decrement-count") {
//     return {
//       ...state,
//       count: state.count - 1, //don't modify state
//     };
//   }
//   if (action.type === "set-value") {
//     return {
//       ...state,
//       valueToAdd:action.payload //don't modify state
//     };
//   }
//   if (action.type === "reset-value") {
//     return {
//       ...state,
//       valueToAdd:action.payload //don't modify state
//     };
//   }

//   return state
