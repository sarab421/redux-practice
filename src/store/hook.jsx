import { useSelector, useDispatch } from "react-redux";

// Custom hook for accessing the Redux state
export const useAppSelector = (selector) => {
  return useSelector(selector);
};

// Custom hook for dispatching actions
export const useAppDispatch = () => {
  return useDispatch();
};
