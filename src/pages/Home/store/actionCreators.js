import * as constants from './types';
import axios from 'axios';
import {fromJS} from 'immutable';

const getListAction = (data) => ({
    type: constants.GET_HOME_LIST,
    topicList: data.topicList,
    noteList: data.noteList,
    recommendList: data.recommendList
})
export const getTopicList = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res)=>{
            dispatch(getListAction(res.data.data));
        })
    }
}

const addMoreListAction = (data,page) => ({
    type: constants.ADD_MORE_LIST,
    moreList: fromJS(data),
    page
})
export const addMoreList = (page) => {
    return (dispatch) => {
        axios.get('/api/moreHome.json?page='+page).then((res)=>{
            dispatch(addMoreListAction(res.data.data,page+1));
        })
    }
}

export const toggleScrollTop = (show)=>({
    type:constants.SCROLL_TOP,
    show
})