export const initialState = {
  currentValue: "0",
  operator: null,
  previousValue: null
};

export const handleNumber = (value, state) => {
  if (state.currentValue === "0") {
    return { currentValue: `${value}` };
  }

  return {
    currentValue: `${state.currentValue}${value}`
  };
};

export const handleEqual = state => {

  const { currentValue, previousValue, operator } = state;

  //define current and previous here

  // Implement - resetState here. 


  if (operator === "/") {
    return {
      currentValue: previous / current,
      ...resetState
    };
  }

  // Implement * operator here

  // Implement + operator here

  // Implement - operator here

  return state;
};

const calculator = (type, value, state) => {
  switch (type) {
    //Implement the switch situation here
  }
};

export default calculator;
