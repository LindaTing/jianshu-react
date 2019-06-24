import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NoteListWrap, Loadmore} from '../style';
import * as actionCreators from '../store/actionCreators';
import {Link} from 'react-router-dom';
class List extends Component {
    render() {
        const {list, addMorelist, page} = this.props;
        return (
            <NoteListWrap>
                {
                    list.map((item) => {
                        return (

                            <li key={item.get("id")}>
                                <div className="content">
                                    <Link to="/detail"><h5 className="title">{item.get("title")}</h5></Link>
                                    <p className="detail">{item.get("detail")}</p>
                                    <p className="meta">
                                            <span className="price"><i
                                                className="iconfont">&#xe65d;</i> {item.get("count")}</span>
                                        <span className="nickname">{item.get("nickname")}</span>
                                        <span className="comment"><i
                                            className="iconfont">&#xe661;</i> {item.get("count")}</span>
                                        <span className="favourte"><i
                                            className="iconfont">&#xe61c;</i> {item.get("count")}</span>
                                    </p>
                                </div>
                                <div className="img" href="a"><Link to="/detail"><img src={item.get("imgurl")} alt=""/></Link>
                                </div>
                            </li>

                        )
                    })
                }
                <Loadmore onClick={() => addMorelist(page)}>加载更多</Loadmore>
            </NoteListWrap>
        )
    }
}
const mapStateToProps = (state) => ({
    list: state.get('home').get('noteList'),
    page: state.get('home').get('page'),
})
const mapDispatch = (dispatch) => ({
    addMorelist(page){
        dispatch(actionCreators.addMoreList(page));
    }
})
export default connect(mapStateToProps, mapDispatch)(List);