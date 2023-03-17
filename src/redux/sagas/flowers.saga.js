import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* flowers_watcher () {
    yield takeEvery('FETCH_FLOWERS', fetchFlowers)
};

function* fetchFlowers () {
    try{
        const flowersSelection = yield axios.get(`/api/wedding/flowers-page`);
        yield put({ type: 'SET_FLOWERS', payload: flowersSelection.data });
    }
    catch(error) {
        console.log('error', error);
    }
};
export default flowers_watcher;