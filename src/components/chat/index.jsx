import React from 'react';
import './index.less';

export default ()=>{

    return(
        <div className="chat-item flex">
            <img 
                width="100%"
                src="https://cdn.suisuijiang.com/fiora/avatar/2.jpg?imageView2/1/q/80/w/96/h/96" 
                alt=""/>
            <div className="chat-item-infos">
                <p className="flex-center-between">
                    <span className="font-14">fiora</span>
                    <span className="font-12">10:35</span>
                </p>
                <p className="font-12 nowrap-text">小姐姐说：我好喜欢你</p>
            </div>
        </div>
    )
}