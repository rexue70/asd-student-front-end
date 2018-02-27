import React, {Component} from 'react';

class ProfileInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: this.props.options.text,
            input: "",
        };
    }

    render() {
        return (
            <div style={{margin:"auto",width:"50%"}}>
                <p>{this.state.text}</p>
                <input style={{width: "167px"}}/>
            </div>
        )
    }
}


export default ProfileInput