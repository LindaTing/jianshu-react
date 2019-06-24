import React, {Component} from 'react';
import {RecommendWrap,RecommendItem} from '../style';
import {connect} from 'react-redux';
class Recommend extends Component {
    render() {
        const {recommendList} = this.props;
        return (
            <RecommendWrap>
                {
                    recommendList.map((item) => {
                        return (
                            <RecommendItem imgurl={item.get("imgUrl")} key={item.get('id')}>
                                {item.get("title")} >
                            </RecommendItem>
                        )
                    })
                }
            </RecommendWrap>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        recommendList:state.getIn(['home', 'recommendList'])
    }
}
export default connect(mapStateToProps, null)(Recommend);