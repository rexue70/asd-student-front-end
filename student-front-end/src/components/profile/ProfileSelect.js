import React, {Component} from 'react';

class ProfileSelect extends Component {

    //Change using constructor for future modify data
    constructor(props) {
        super(props);
        this.change = this.change.bind(this);
        this.state = {
            text: this.props.options.text,
            options: this.props.options.data,
            value: undefined
        };
    }


    change(event) {
        this.setState({ value: event.target.value });
        console.log("it is change name ", this.props.name);
        console.log("it is change value", event.target.value);
        this.props.action(this.props.name, event.target.value);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({value: nextProps.value});
        console.log("Received data", nextProps.value);
    }

    render() {
        const optionList = this.state.options.map(option => {
            return (
                <option key={option} value={option}>{option}</option>
            )
        });

        return (
            <div style={{margin: "auto", width: "50%"}}>
                <p>{this.state.text}</p>
                <select style={{width: "175px"}} value={this.state.value} onChange={this.change}>
                    {optionList}
                </select>
            </div>
        )
    }
}


export default ProfileSelect