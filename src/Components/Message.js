import React from 'react';
import info from './assets/info.png'

function Message(props) {
    return (
        <div>
            <div className="msgbox mt-16">
                <div className="msg">
                    <div className="msgicon pr-4">
                        <img src={info}/>
                    </div>
                    <div className="msgtext">
                        
                        <p>Tada! Get started with a free template. Can’t find what you are looking for? Search from the 1000+ available templates</p>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Message;