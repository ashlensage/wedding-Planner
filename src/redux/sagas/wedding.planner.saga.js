import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* getWeddingPlanner() {
  try {

    const response = yield axios.get('/api/wedding');

    yield put({ type: 'WEDDING_PLANNER_GET', payload: response.data });
  } catch (error) {
    console.log('User get request failed', error);
  }
}


function* postWeddingPlanner() {
  try {

    const response = yield axios.post('/api/wedding');

    yield put({ type: 'WEDDING_PLANNER_POST', payload: response.data });
  } catch (error) {
    console.log('User get request failed', error);
  }
}


function* putWeddingPlanner() {
  try {

    const response = yield axios.put('/api/wedding');

    yield put({ type: 'WEDDING_PLANNER_PUT', payload: response.data });
  } catch (error) {
    console.log('User get request failed', error);
  }
}


function* deleteWeddingPlanner() {
  try {

    const response = yield axios.delete('/api/wedding');

    yield put({ type: 'WEDDING_PLANNER_DELETE', payload: response.data });
  } catch (error) {
    console.log('User get request failed', error);
  }
}

function* weddingPlannerSagas() {
  yield takeEvery('GET_WEDDING_PLANNER', getWeddingPlanner);
  yield takeEvery('POST_WEDDING_PLANNER', postWeddingPlanner);
  yield takeEvery('PUT_WEDDING_PLANNER', putWeddingPlanner);
  yield takeEvery('DELETE_WEDDING_PLANNER', deleteWeddingPlanner);
}

export default weddingPlannerSagas;

// 