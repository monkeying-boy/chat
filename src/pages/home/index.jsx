import React from 'react';
import { connect } from 'react-redux';
import  './index.less';
import Tool from "@/components/tool";
import Chat from "@/components/chat";
import { increment } from '@/store/actions';

const mapDispatchToProps = ( dispatch) =>{
    return{
        add:(params) =>{
            dispatch(increment(params));
        }
    }
}

const mapStateToProps =( state)=>{
    console.log(state)
    return{
        count: state.count
    }
}


const Home = ({count,add})=>{

    return(
        <div className="home-page flex">
            <div className="page-left">
                <Tool />
            </div>
            <div  className="page-content">
                {
                    [1,2,3,4,5,6].map(item => (
                        <Chat key={item}/>
                    ))
                }
                <p>当前count值={count}</p>
                <button onClick={ ()=>{add({demo:'123123'})} }>增加</button>
            </div>
            <div className="page-right flex">
                <div className="page-right-top flex-center-between">
                    <p>吐槽大会</p>
                    <div>
                        <span>分享</span>
                        <span>群信息</span>
                    </div>
                </div>
                {/* 信息内容 */}
                <div className="page-right-content">

                </div>
                {/* 消息模块 */}
                <div className="page-right-bottom flex-center-between">
                    <div> <span>表情</span> <span>拓展</span> </div>
                    
                    <input type="text"/>
                    <span>发送</span>
                </div>

            </div>
        </div>
    )
}

export default connect(mapStateToProps,mapDispatchToProps )(Home);