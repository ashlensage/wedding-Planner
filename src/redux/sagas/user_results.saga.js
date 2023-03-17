import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* user_results_watcher () {
    yield takeEvery('FETCH_USER_RESULTS', fetchUserResults)
};

function* fetchUserResults () {
    try{
        const userResultsSelection = yield axios.get(`/api/wedding/final-page`);
        yield put({ type: 'SET_WEDDING_PLANNER_RESULTS', payload: userResultsSelection.data });
    }
    catch(error) {
        console.log('error', error);
    }
};
export default user_results_watcher;