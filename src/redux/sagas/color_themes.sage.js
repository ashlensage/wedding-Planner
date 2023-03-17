import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* color_themes_watcher () {
    yield takeEvery('FETCH_COLOR_THEMES', fetchColorThemes)
};

function* fetchColorThemes () {
    try{
        const colorThemesSelection = yield axios.get(`/api/wedding/color-themes-page`);
        yield put({ type: 'SET_COLOR_THEME', payload: colorThemesSelection.data });
    }
    catch(error) {
        console.log('error', error);
    }
};
export default color_themes_watcher;