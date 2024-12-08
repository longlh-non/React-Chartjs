import { setLoading, setData, setError } from "./slice";
import api from "../../api/baseAPI"; // Hypothetical API utility

export const fetchData = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await api.get("/data"); // Replace with your endpoint
    dispatch(setData(response.data));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};
