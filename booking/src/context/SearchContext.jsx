import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  city: "",
  date: [
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ],
  options: {
    adult: 1,
    children: 0,
    room: 1,
  },
};

export const SearchContext = createContext(INITIAL_STATE);

const SearchReducer = (state, action) => {
  switch (action.type) {
    case "NEW_SEARCH":
      return action.payload;
    case "RESET_SEARCH":
      return INITIAL_STATE;
    default:
      return state;
  }
};

export const SearchContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);

  return (
    <SearchContext.Provider
      value={{
        city: state.destination || INITIAL_STATE.city,
        date: state.chosenDate || INITIAL_STATE.date,
        options: state.chosenOptions || INITIAL_STATE.options,
        dispatch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
