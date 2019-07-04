import React, {Component} from 'react';
import {connect} from 'react-redux';
import {actionCreator} from './store';
import {Redirect} from 'react-router-dom';
import {
    LoginWarp,
    LoginBox,
    Title,
    FormBox,
    Input
} from './style'

class Login extends Component {
    render() {
        const {login, loginStatus} = this.props;
        return (

            this.props.loginStatus ?
                <Redirect to="/"/>
                :
                <LoginWarp>
                    <LoginBox>
                        <Title>登录</Title>
                        <FormBox>
                            <Input placeholder="手机号" innerRef={(input) => {
                                this.accoutn = input
                            }}/>
                            <Input placeholder="密码" type="password" innerRef={(input) => {
                                this.password = input
                            }}/>
                            <button type="button" onClick={() => login(this.accoutn, this.password)}>登录</button>
                        </FormBox>
                    </LoginBox>
                </LoginWarp>

        )
    }
}
const mapStateToProps = (state) => {
    return {
        loginStatus: state.getIn(["login", "loginStatus"])
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        login(account, password){
            dispatch(actionCreator.login(account, password));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);