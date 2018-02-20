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

    render() {

        const optionList = this.state.options.map(option => {
            return (
                <option key={option} value={option}>{option}</option>
            )
        });

        return (
            <div>
                <p>{this.state.text}</p>
                <select style={{width: "175px"}}>
                    {optionList}
                </select>
            </div>
        )
    }
}


export default ProfileSelect