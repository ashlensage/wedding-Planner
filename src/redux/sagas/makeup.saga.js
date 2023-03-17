import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* makeup_watcher () {
    yield takeEvery('FETCH_MAKEUP', fetchMakeup)
};

function* fetchMakeup () {
    try{
        const makeupSelection = yield axios.get(`/api/wedding/makeup-page`);
        yield put({ type: 'SET_MAKEUP', payload: makeupSelection.data });
    }
    catch(error) {
        console.log('error', error);
    }
};
export default makeup_watcher;