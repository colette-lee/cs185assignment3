import React, {Component} from 'react';

import ice from './assets/ice.MOV';
import music from './assets/musicvid.MOV';
import dead from './assets/dead.MOV';
import snow from './assets/snow.MOV';
import fight from './assets/fight.mov';


import './style.css';


class Videodata extends Component {
    constructor(){
        super();
        this.state = {
            active: false,
            modalVid: '',
            modalDisplay: 'none'
        };
    }

    clickVid(vid){
        //console.log("clckImg");
        this.setState({modalVid: vid,
            modalDisplay: 'flex',
            active: true
        });
    }

    closeVid(){
        this.setState({modalDisplay: 'none'});
    }
    render(){

        //var modalImg = (<img  class="modal-content" id='currentImg'></img>);
        
        return (
            <div>
                <body>
                    <div className="grid-container">
                        <div className="grid-item"><video width="320" onClick={(e)=>this.clickVid(ice)} src={ice}></video></div>
                        <div className="grid-item"><video width="320" onClick={(e)=>this.clickVid(music)} src={music}></video></div>
                        <div className="grid-item"><video width="320" onClick={(e)=>this.clickVid(dead)} src={dead}></video></div>
                        <div className="grid-item"><video width="320" onClick={(e)=>this.clickVid(snow)} src={snow}></video></div>
                        <div className="grid-item"><video width="320" onClick={(e)=>this.clickVid(fight)} src={fight}></video></div>


                        
                    </div>

                    <div className="modal" id="myModal" style={{display:this.state.modalDisplay}} onClick={(e)=>this.closeVid()}>
                        <video class="modal-content-vid" id='currentImg' src={this.state.modalVid} controls={this.state.active} autoplay={this.state.active} paused={!this.state.active}></video>
                    </div>
                </body>
            </div>
            
            
        )
    }
}

export default Videodata;