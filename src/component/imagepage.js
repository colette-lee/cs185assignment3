import React, {Component} from 'react';
import sponge from './assets/sponge.jpg';
import banned from './assets/banned.jpeg';
import tradition from './assets/tradition.png';
import lecture from './assets/lectures.jpeg';
import labor from './assets/labor.jpeg';
import fryer from './assets/fryer.jpeg';

import './style.css';


class Imagedata extends Component {
    constructor(){
        super();
        this.state = {
            active: false,
            modalImg: '',
            modalDisplay: 'none'
        };
    }

    clickImg(image){
        //console.log("clckImg");
        this.setState({modalImg: image,
            modalDisplay: 'flex'
        });
    }

    closeImg(){
        this.setState({modalDisplay: 'none'});
    }
    render(){

        //var modalImg = (<img  class="modal-content" id='currentImg'></img>);
        
        return (
            <div>
                <body>
                    <div className="grid-container">
                        <div className="grid-item"><img className="grid-image" onClick={(e)=>this.clickImg(sponge)} src={sponge}></img></div>
                        <div className="grid-item"><img className="grid-image" onClick={(e)=>this.clickImg(banned)} src={banned}></img></div>
                        <div className="grid-item"><img className="grid-image" onClick={(e)=>this.clickImg(tradition)} src={tradition}></img></div>
                        <div className="grid-item"><img className="grid-image" onClick={(e)=>this.clickImg(lecture)} src={lecture}></img></div>
                        <div className="grid-item"><img className="grid-image" onClick={(e)=>this.clickImg(labor)} src={labor}></img></div>
                        <div className="grid-item"><img className="grid-image" onClick={(e)=>this.clickImg(fryer)} src={fryer}></img></div>

                    </div>

                    <div className="modal" id="myModal" style={{display:this.state.modalDisplay}} onClick={(e)=>this.closeImg()}>
                        <img  class="modal-content" id='currentImg' src={this.state.modalImg}></img>
                    </div>
                </body>
            </div>
            
            
        )
    }
}

export default Imagedata;