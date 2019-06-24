import {actionTypes} from './index';
import {fromJS} from 'immutable';
import axios from 'axios';
// 需要暴露出去的action
export const inputFocusBlurAction = () => ({
    type: actionTypes.INPUT_FOCUS_BLUR
})
export const mouseAction = (mouse) => ({
    type: actionTypes.MOUSE_ENTER_LEAVE,
    mouse
})
export const changeData = (page,totalPage) => ({
    type: actionTypes.CHANGE_DATA,
    page
})


// 不需要暴露出去，仅action.js自己用的action
const getListAction = (data,totalPage) => ({
    type: actionTypes.GET_LIST,
    data:fromJS(data),
    totalPage
})

export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            const totalPage = Math.ceil(res.data.data.length / 10);
            dispatch(getListAction(res.data.data,totalPage));
        }).catch(() => {
        })
    }
}
