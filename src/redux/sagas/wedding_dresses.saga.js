import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* wedding_dresses_watcher () {
    yield takeEvery('FETCH_WEDDING_DRESS', fetchWeddingDress)
};

function* fetchWeddingDress () {
    try{
        const weddingDressSelection = yield axios.get(`/api/wedding/wedding-dresses-page`);
        yield put({ type: 'SET_WEDDING_DRESS', payload: weddingDressSelection.data });
    }
    catch(error) {
        console.log('error', error);
    }
};
export default wedding_dresses_watcher;