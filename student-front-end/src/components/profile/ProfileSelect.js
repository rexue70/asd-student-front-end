import React, {Component} from 'react';

class ProfileSelect extends Component {

    //Change using constructor for future modify data
    constructor(props) {
        super(props);
        this.change = this.change.bind(this);
        this.state = {
            text: this.props.options.text,
            options: this.props.options.data,
            value: "",
        };
    }


    change(event) {
        this.setState({ value: event.target.value });
        console.log("it is change name ", this.props.name);
        console.log("it is change value", event.target.value);
        this.props.action(this.props.name, event.target.value);
    }


    render() {

        const optionList = this.state.options.map(option => {
            return (
                <option key={option} value={option} >{option}</option>
            )
        });

        return (
            <div style={{margin: "auto", width: "80%"}}>

                <h5>
                    <label>{this.state.text}</label>
                </h5>
                <select class="form-control"  onChange={this.change}>
                    {optionList}
                </select>
            </div>
        )
    }
}
// style={{width: "175px"}}

export default ProfileSelect