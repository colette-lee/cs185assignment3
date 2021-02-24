import React, {Component} from 'react';


import './style.css';


class Emaildata extends Component {

   constructor(){
       super();
       this.state = {value: ''};

       this.handleChange = this.handleChange.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleChange(event){
       this.setState({value: event.target.value});
   }

   handleSubmit(event){
       var email  = this.state.value;

       //var valid = true;

       var end = email.substr(email.length-4,4);
       if(email.includes('@') && (end==".edu" || end==".com")){
           alert("Email succesfully recorded.")
       } else {
           alert("Invalid email");
       }
       //alert('email: '+ this.state.value);
       event.preventDefault();
   }

    render(){

        
        return (
            <div>
                <body className="textPage">

                    <br></br>
                    <form onSubmit={this.handleSubmit}>
                    <label>
                        Email: 
                        <input type="text" value={this.state.value} onChange={this.handleChange}></input>
                    </label>
                    <br></br>
                    <br></br>
                    <input type="submit"></input>
                    </form>
                </body>
            </div>
            
            
        )
    }
}

export default Emaildata;