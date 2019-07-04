import {combineReducers} from 'redux-immutable';
import {reducer as headerReducer} from '../common/Header/store';
import {reducer as homeReducer} from '../pages/Home/store';
import {reducer as detailReducer} from '../pages/Detail/store';
import {reducer as loginReducer} from '../pages/Login/store';

export default combineReducers({
    header:headerReducer,
    home:homeReducer,
    detail:detailReducer,
    login:loginReducer
})