import React, {Component} from 'react';
import {CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux';
import {actionCreators} from './store';
import { Link} from 'react-router-dom';
import {
    Head,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Button,
    NavSearchWarp,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoItem
} from './style'

class Header extends Component {

    getSearchInfo() {
        const {focused, list, page, totalPage, handelMouse, mouseEnterLeave, handelChangeData} = this.props;
        const newList = list.toJS();
        const showList = [];
        if (newList.length) {
            for (let i = (page - 1) * 10; i < page * 10; i++) {
                // console.log(newList[i]);//focused之后才会调用ajax获取数据，然而页面一加载就会执行此处，导致undefined，所以加if
                if (newList[i]) {
                    showList.push(<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>)
                }
            }
        }
        if (focused || mouseEnterLeave === "enter") {
            return (
                <SearchInfo onMouseEnter={() => handelMouse("enter")}
                            onMouseLeave={() => handelMouse("leave")}>
                    <SearchInfoTitle>
                        热门搜索
                        <em onClick={() => handelChangeData(page, totalPage, this.spinIcon)}><i ref={(spin) => {
                            this.spinIcon = spin
                        }} className="iconfont spin">&#xe6e1;</i> 换一批</em>
                    </SearchInfoTitle>
                    {/*{list.map((item) => {*/}
                    {/*return <SearchInfoItem key={item}>{item}</SearchInfoItem>*/}
                    {/*})}*/}
                    {showList}
                </SearchInfo>
            )
        } else {
            return null;
        }
    }

    render() {
        const {focused, list, inputFocusBlur} = this.props;
        return (
            <Head>
                    <Link to="/">
                        <Logo/>
                    </Link>
                <Nav className="left">
                    <NavItem className="active">首页</NavItem>
                    <NavItem className="hover">下载App</NavItem>
                    <NavSearchWarp>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch className={focused ? 'focused' : ''}
                                       onFocus={() => inputFocusBlur(true, list)}
                                       onBlur={() => inputFocusBlur(false)}></NavSearch>
                        </CSSTransition>
                        <a className={focused ? 'search focused' : 'search'} href="/"><i
                            className="iconfont">&#xe630;</i></a>
                        {this.getSearchInfo(focused)}
                    </NavSearchWarp>
                </Nav>
                <Nav className="right">
                    <NavItem className="font"><i className="iconfont">&#xe76a;</i></NavItem>
                    <Button className="login">登录</Button>
                    <Button className="reg">注册</Button>
                    <Button className="writing"><i className="iconfont">&#xe60e;</i>写文章</Button>
                </Nav>
            </Head>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        // focused: state.get('header').get('focused')
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        mouseEnterLeave: state.getIn(['header', 'mouseEnterLeave']),
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        inputFocusBlur(focused, list){
            if (focused) {
                (list.size === 0) && dispatch(actionCreators.getList());
            }
            dispatch(actionCreators.inputFocusBlurAction());
        },
        handelMouse(enterOrLeave){
            dispatch(actionCreators.mouseAction(enterOrLeave));
        },
        handelChangeData(page, totalPage, spinIcon){

            let orginRoate = spinIcon.style.transform.replace(/[^0-9]/ig, '');
            if (orginRoate) {
                orginRoate = parseInt(orginRoate, 10);
            } else {
                orginRoate = 0;
            }
            spinIcon.style.transform = 'rotate(' + (orginRoate + 360) + 'deg)';
            if (page < totalPage) {
                dispatch(actionCreators.changeData(page + 1, totalPage));
            } else {
                dispatch(actionCreators.changeData(1));
            }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);