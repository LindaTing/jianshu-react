import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actionCreators from './store/actionCreators';
import Topic from './components/Topic';
import Recommend from './components/Recommend';
import List from './components/List';
import Download from './components/Download';
import Writer from './components/Writer';
import {
    HomeWarp,
    HomeLeft,
    HomeRight,
    ScrollTop
} from './style';
class Home extends Component {
    render() {
        return (
            <HomeWarp>
                <HomeLeft>
                    <img
                        className="banner-img"
                        src="//upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
                        alt=""/>
                    <Topic/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Download/>
                    <Writer/>
                </HomeRight>
                {this.props.scrollTopFlag}
                {this.props.scrollTopFlag?<ScrollTop onClick={()=>this.scrollToTop()}>top</ScrollTop>:''}
            </HomeWarp>
        )
    }
    componentDidMount(){
        this.props.getdata();
        this.bindEvent();
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.props.scrollTop);
    }
    bindEvent(){
        window.addEventListener('scroll',this.props.scrollTop);
    }
    scrollToTop(){
        window.scrollTo(0,0);
    }
}
const mapState = (state) => ({
    scrollTopFlag:state.getIn(["home","scrollTopFlag"])
})
const mapDispatch = (dispatch) => ({
    getdata(){
        dispatch(actionCreators.getTopicList());
    },
    scrollTop(){
        if(document.documentElement.scrollTop>200){
            dispatch(actionCreators.toggleScrollTop(true));
        }else{
            dispatch(actionCreators.toggleScrollTop(false));
        }
    }
})

export default connect(mapState, mapDispatch)(Home);