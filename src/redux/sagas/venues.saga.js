import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* venues_watcher () {
    yield takeEvery('FETCH_VENUES', fetchVenues)
};

function* fetchVenues () {
    try{
        const venuesSelection = yield axios.get(`/api/wedding/venues-page`);
        yield put({ type: 'SET_VENUES', payload: venuesSelection.data });
    }
    catch(error) {
        console.log('error', error);
    }
};
export default venues_watcher;