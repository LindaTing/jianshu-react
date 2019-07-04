import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

class Write extends Component {
    render() {
        return (
            this.props.loginStatus ?
                <div>写文章</div>
                :
                <Redirect to="/login"/>

        )
    }
}
const mapStateToProps = (state) => {
    return {
        loginStatus: state.getIn(["login", "loginStatus"])
    }
};

export default connect(mapStateToProps, null)(Write);