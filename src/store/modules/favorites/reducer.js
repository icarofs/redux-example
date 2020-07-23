const INITIAL_STATE = {
  loading: false,
  data: [],
  error: null,
};

export default function favorites(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@type/FAVORITE_REQUEST':
      return { ...state, loading: true };
    case '@type/FAVORITE_SUCCESS':
      return {
        ...state,
        loading: false,
        error: null,
        data: [...state.data, action.payload.data],
      };
    case '@type/FAVORITE_FAILURE':
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
}
