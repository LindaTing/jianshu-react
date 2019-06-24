import {fromJS} from 'immutable';
import * as constants from './types';
const defaultState = fromJS({
    topicList: [],
    noteList: [],
    recommendList: [],
    page:0,
    scrollTopFlag:false
})
export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.GET_HOME_LIST:
            return state.merge({
                topicList: fromJS(action.topicList),
                noteList: fromJS(action.noteList),
                recommendList: fromJS(action.recommendList),
            });
        case constants.ADD_MORE_LIST:
            return state.merge({
                noteList: state.get("noteList").concat(action.moreList),
                page:action.page
            });
        case constants.SCROLL_TOP:
            return state.set("scrollTopFlag",action.show);
        default:
            return state;
    }
}