import React, {Component} from 'react';

function Textdata() {
    return(
        <div>

            <body className="textPage">
                <br></br>
                <form className="myForm">
                    <label>
                        First Name:
                        <input type="text"></input>
                    </label>
                    <br></br>
                    <label>
                        Last Name:
                        <input type="text"></input>
                    </label>

                    <p>How do you feel about mayonnaise?</p>
                    <input type="radio" ></input>
                    <label>Love it</label><br></br>
                    <input type="radio" ></input>
                    <label>Hate it</label><br></br>
                    <input type="radio" ></input>
                    <label>Is an instrument</label><br></br>
                    <br></br>
                    <input type="submit" value="Done"></input>
                </form>
            </body>
        </div>
    )
}

export default Textdata;