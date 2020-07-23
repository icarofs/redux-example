export function favoriteRequest(repository) {
  return {
    type: '@type/FAVORITE_REQUEST',
    payload: { repository },
  };
}

export function favoriteSuccess(data) {
  return {
    type: '@type/FAVORITE_SUCCESS',
    payload: { data },
  };
}

export function favoriteFailure(error) {
  return {
    type: '@type/FAVORITE_FAILURE',
    payload: { error },
  };
}
