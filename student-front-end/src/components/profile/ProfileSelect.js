import React, {Component} from 'react';

class ProfileSelect extends Component {

    //Change using constructor for future modify data
    constructor(props) {
        super(props);
        this.state = {
            text: this.props.options.text,
            options: this.props.options.data,
        };
    }


    change() {
        console.log("it is change");
    }


    render() {

        const optionList = this.state.options.map(option => {
            return (
                <option key={option} value={option} onChange={this.change}>{option}</option>
            )
        });

        return (
            <div style={{margin: "auto", width: "50%"}}>
                <p>{this.state.text}</p>
                <select style={{width: "175px"}}>
                    {optionList}
                </select>
            </div>
        )
    }
}


export default ProfileSelect