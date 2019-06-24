import {actionTypes} from './index';
import {fromJS} from 'immutable';
//immutable数据一旦被创建就不能改变，state数据就不能改变，所以我们把state用成immutable数据。
//安装npm install immutable
//1、创建immutable对象fromJS()
//2、获取state  state.get()
//设置state state.set()
const defaultState = fromJS({
    focused: false,
    mouseEnterLeave: '',
    page: 1,
    totalPage: 1,
    list: []
})
export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.INPUT_FOCUS_BLUR://搜索框聚焦/失焦
        {
            const newState = JSON.parse(JSON.stringify(state));
            // newState.focused = !(newState.focused);
            return state.set('focused', !(newState.focused));
        }
        case actionTypes.GET_LIST://热门搜索获取数据
            return state.set('list', action.data).set('totalPage', action.totalPage);
        case actionTypes.MOUSE_ENTER_LEAVE:
            return state.set('mouseEnterLeave', action.mouse);
        case actionTypes.CHANGE_DATA:
            return state.set('page', action.page);
        default:
            return state;
    }
}