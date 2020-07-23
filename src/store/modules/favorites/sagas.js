/* eslint-disable camelcase */
import { all, takeLatest, call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import { favoriteSuccess, favoriteFailure } from './actions';

export function* favorite({ payload }) {
  try {
    const { repository } = payload;
    const { data } = yield call(api.get, `repos/${repository}`);

    const response = {
      id: data.id,
      name: data.full_name,
      description: data.description,
      url: data.html_url,
    };
    yield put(favoriteSuccess(response));
  } catch (err) {
    yield put(favoriteFailure('Erro ao adicionar repositório'));
  }
}
export default all([takeLatest('@type/FAVORITE_REQUEST', favorite)]);
