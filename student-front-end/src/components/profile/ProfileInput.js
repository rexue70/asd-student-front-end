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
            <div style={{margin:"auto",width:"80%"}}>

                    <h5>
                        <label>{this.state.text}</label>
                    </h5>

                <input class="form-control"/>
            </div>
        )
    }
}


export default ProfileInput