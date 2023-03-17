import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* hair_watcher () {
    yield takeEvery('FETCH_HAIR', fetchHair)
};

function* fetchHair () {
    try{
        const hairSelection = yield axios.get(`/api/wedding/hair-page`);
        yield put({ type: 'SET_HAIR', payload: hairSelection.data });
    }
    catch(error) {
        console.log('error', error);
    }
};
export default hair_watcher;