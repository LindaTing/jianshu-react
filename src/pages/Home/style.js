import styled from 'styled-components';
export const HomeWarp = styled.div`
    display:flex;
    width:960px;
    margin:0 auto;
    padding-top:30px;
    botrder:1px solid red;
`
export const HomeLeft = styled.div`
    flex:2;
    .banner-img{
        border-radius:5px;
        width:100%;
    }
`
export const HomeRight = styled.aside`
    flex:1;
`

export const TopicWrap = styled.ul`
    overflow:hidden;
    .topic-pic{
        width:32px;
        height:32px;
        display:inline-block;
        vertical-align:middle;
    }
    li{
        display:inline-block;
        font-size:12px;
        background:#f7f7f7;
        color:#333;
        border:1px solid #ebebeb;
        border-radius:5px;
        margin-right:10px;
        margin-top:10px;
        span{
           padding:0 5px;
        }
    }
`
export const NoteListWrap = styled.ul`
    margin:20px auto;
    a{
        color:#333;
    }
    li{
        display:flex;
        padding:15px 0;
        border-bottom:1px solid #ebebeb;
    }
    li:last-child{
        border-bottom:0;
    }
    .content{
        flex:1;
        .title{
            font-size: 18px;
            font-weight: 700;
            line-height: 1.5;
            margin: -7px 0 4px;
        }
        .detail{
            margin: 0 0 8px;
            font-size: 13px;
            line-height: 24px;
            color: #999;
            padding-right:10px;
        }
    }
    .img{
        align-items: center;
    }
    .img img{
        width:150px;
        height:100px;
        border-radius:4px;
    }
    .meta{
        padding-right: 0!important;
        font-size: 12px;
        font-weight: 400;
        line-height: 20px;
        color: #b4b4b4;
        span{
            margin-right:10px;
        }
        .price{
        color:#ea6f5a;
        }
        .nickname:hover,.comment:hover{
            color:#999;
        }
    }
`
export const RecommendWrap = styled.ul`
    padding-left:20px;
`
export const RecommendItem = styled.li`
    height:50px;
    line-height:50px;
    width:280px;
    font-size: 17px;
    border-radius:5px;
    margin-bottom:10px;
    padding-left:25px;
    color:#fff;
    cursor:pointer;
    background: url(${props => props.imgurl});
`
export const Loadmore = styled.button`
    height:30px;
    line-height:30px;
    width:100%;
    background:#ddd;
    font-size: 17px;
    border-radius:30px;
    margin-bottom:10px;
    color:#fff;
    cursor:pointer;
    margin-top:10px;
`
export const ScrollTop = styled.div`
    position:fixed;
    right:30px;
    bottom:30px;
    height:40px;
    width:40px;
    text-align:center;
    line-height:40px;
    border:1px solid #eee;
    color:#eee;
    cursor:pointer;
    &:hover{
        color:#ddd;
        border:1px solid #ddd;
    }
`

