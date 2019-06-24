import styled from 'styled-components'
import logoPic from '../../static/images/logo.png'
export const Head = styled.header`
display:flex;
 width:100%;
 height:56px;
 border-bottom:1px solid #f0f0f0;
 position:relative;
 font-size:17px;
 `

export const Logo = styled.div`
 display:block;
 width:100px;
 height:56px;
 background:url(${logoPic});
 background-size:contain;
 `
export const Nav = styled.nav`
 height:56px;
 &.right{
 text-align:right;
 &.left{
  flex:1;
 }
  &.right{
  flex:2;
 }
 }
 `
export const NavItem = styled.a`
 display:inline-block;
 height: 56px;
 line-height: 56px;
 padding:0 15px;
 color: #333;
 cursor:pointer;
 &.hover{
  margin-left:10px;
  margin-right:20px;
 }
 &.hover:hover{
 background:#f0f0f0;
 }
 &.active{
 color:#ea6f5a;
 }
 &.right{
 color:#969696;
 }
 &.font{
 color:#969696;
 font-size:26px;
 vertical-align:middle;
 }
 `
export const NavSearchWarp = styled.div`
 position:relative;
 display:inline-block;
 height: 38px;
 line-height: 38px;
 // background: red;
.search{
        display:block;
        top:4px;
        right:4px;
        position:absolute;
        width:30px;
        height:30px;
        line-height:30px;
        border-radius:15px;
        text-align:center;
        color:#777;
    }
 .focused.search{
 background: #888;
 color:#fff;
 }
 `
export const NavSearch = styled.input.attrs({placeholder: '搜索'})`
    padding: 0 40px 0 20px;
    width: 100px;
    height: 38px;
    font-size: 14px;
    border: 1px solid #eee;
    border-radius: 40px;
    background: #eee;
    color:#666;
    &::placeholder{
    color:#999;
    }
    &.focused{
     width:200px;
     }
      &.slide-enter{
    transition:all .2s ease-out;
 }
 &.slide-enter-active{
    width:200px;
 }
 &.slide-exit{
 transition:all .2s ease-out;
 }
 &.slide-exit-active{
    width:100px;
 }
 `
export const SearchInfo = styled.ul`
    width:200px;
    position: absolute;
    left: 0;
    top:50px;
    background-color: #fff;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    border-radius: 4px;
    padding:20px 20px 10px 20px;
    &:after{
        content: "";
        position: absolute;
        width: 0;
        height: 0;
        border: 12px solid transparent;
        border-bottom-color: #fff;
        left: 20px;
        bottom: 99%;
    }
`
export const SearchInfoTitle = styled.li`
    font-size: 14px;
    color: #969696;
    height:20px;
    line-height:20px;
    em{
        font-size: 13px;
        float:right;
        cursor:pointer;
        .spin{
            display:block;
            float:left;
            margin-right:5px;
            font-size:10px;
            transform-orign:center center;
            transition:all .2s linear;
        }
    }
    em:hover{
        color:#333;
    }
`
export const SearchInfoItem = styled.li`
    height:20px;
    line-height: 13px;
    margin-right: 10px;
    display: inline-block;
    padding: 2px 6px;
    font-size: 12px;
    color: #787878;
    border: 1px solid #ddd;
    border-radius: 3px;
    box-sizing:border-box;
    cursor:pointer;
    &:hover{
        color:#333;
        border: 1px solid #777;
    }
`

export const Button = styled.button`
 margin: 0 6px 0 10px;
 font-size: 15px;
 color: #969696;
 padding:6px 12px;
 cursor:pointer;
 &.reg{
 width: 80px;
 height: 38px;
 border:1px solid rgba(236,97,73,.7);
 border-radius: 20px;
 font-size: 15px;
 color: #ea6f5a;
 &:hover{
 background: rgba(236,97,73,.1);
 }
 }
  &.writing{
 height: 38px;
 border:1px solid rgba(236,97,73,.7);
 background: rgba(236,97,73,.9);
 border-radius: 20px;
 font-size: 15px;
 color: #ffffff;
 &:hover{
 background: rgba(236,97,73,1);
 }
 }
`
