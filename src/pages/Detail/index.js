import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actionCreator from './store/actionCreator';
import {withRouter} from 'react-router-dom';
import {
    DetailWarp,
    Title
} from './style';
class Detail extends Component {
    render() {
        const {title, content} = this.props;
        return (
            <DetailWarp>
                <Title>{title}</Title>
                <div className="articleWarp" dangerouslySetInnerHTML={{ __html: content }}>
                </div>
            </DetailWarp>
        )
    }
    componentDidMount(){
        this.props.getData(this.props.match.params.id);
       console.log(this.props)
    }
}
const mapStateToProps = (state) => ({
    title: state.getIn(["detail", "title"]),
    content: state.getIn(["detail", "content"])
})
const mapDispatch = (dispatch)=>({
    getData(id){
        dispatch(actionCreator.getDetailData(id))
    }
})
export default connect(mapStateToProps, mapDispatch)(withRouter(Detail));
