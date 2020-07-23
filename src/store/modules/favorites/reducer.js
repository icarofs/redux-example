import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
  data: [],
  error: null,
};

export default function favorites(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@type/FAVORITE_REQUEST':
      return produce(state, (draft) => {
        draft.loading = true;
      });
    case '@type/FAVORITE_SUCCESS':
      return produce(state, (draft) => {
        draft.loading = false;
        draft.error = null;
        draft.data = [...state.data, action.payload.data];
      });

    case '@type/FAVORITE_FAILURE':
      return produce(state, (draft) => {
        draft.loading = false;
        draft.error = action.payload.error;
      });
    default:
      return state;
  }
}
