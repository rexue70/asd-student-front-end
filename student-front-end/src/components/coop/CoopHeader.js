import React, {Component} from 'react';
import background from '../../images/background.png'

class CoopHeader extends Component {

    render() {
        return (
            <div>
                <div className="image">
                    <img src={background}></img>
                </div>

                <div>
                <table className="centered">
                    <tr>
                        <th class="color1">M</th>
                        <th class="color2">Y</th>
                        <th class="space"></th>
                        <th class="color1">C</th>
                        <th class="color2">O</th>
                        <th class="color1">O</th>
                        <th class="color2">P</th>
                    </tr>
                </table>
                </div>
                <div className="bottom">
                    Find your coop resource here!
                </div>
            </div>
        )
    }
}


export default CoopHeader