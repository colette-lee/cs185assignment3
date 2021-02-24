import React, {Component} from 'react';

function Tabledata() {
    return(
        <div>

            <body className="textPage">
                <br></br>
                <table>
                    <tr>
                    <th>Article</th>
                    <th>Description</th>
                    <th>Year</th>
                    </tr>
                    <tr>
                    <td><a href = "https://medium.com/@OfcrACab/confessions-of-a-former-bastard-cop-bb14d17bc759">Confessions of a Former Bastard Cop</a></td>
                    <td>A former police officer explains the behavior of American law efforcement, the structures that perpetuate it and why it should be abolished. </td>
                    <td>2020</td>
                    </tr>
                    <tr>
                        <td><a href = "https://www.theatlantic.com/ideas/archive/2021/01/denial-heartbeat-america/617631/">Denial Is the Heartbeat of America</a></td>
                        <td>Boston University Professor Ibram X. Kendi dissects the reaction to the recent attack on the capital:  "White terror is as American as the Stars and Stripes. But when this is denied, it is no wonder that the events at the Capitol are read as shocking and un-American."</td>
                        <td>2021</td>
                    </tr>
                </table>
            </body>
        </div>
    )
}

export default Tabledata;