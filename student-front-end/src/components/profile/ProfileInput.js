import React, {Component} from 'react';

class ProfileInput extends Component {

    constructor(props) {
        super(props);
        this.change = this.change.bind(this);
        this.state = {
            text: this.props.options.text,
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
        return (
            <div style={{margin:"auto",width:"50%"}}>
                <p>{this.state.text}</p>
                <input style={{width: "167px"}} value={this.state.value} onChange={this.change}/>
            </div>
        )
    }
}


export default ProfileInput