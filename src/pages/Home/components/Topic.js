import React, {Component} from 'react';
import {TopicWrap} from '../style';
import {connect} from 'react-redux';
class Topic extends Component {
    render() {
        const {topicList} = this.props;
        return (
            <TopicWrap>
                {
                    topicList.map((item) => {
                        return (
                            <li key={item.get('id')}>
                                <img className="topic-pic"
                                     src={item.get('imgurl')}
                                     alt=""/>
                                <span>{item.get('title')}</span>
                            </li>
                        )
                    })
                }
            </TopicWrap>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        topicList:state.getIn(['home', 'topicList'])
    }
}
export default connect(mapStateToProps, null)(Topic);