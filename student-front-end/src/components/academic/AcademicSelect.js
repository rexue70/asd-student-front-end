import React, {Component} from 'react';
import { css } from 'react-bootstrap';

class AcademicSelect extends Component {

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
                <select>
                    {optionList}
                </select>
            </div>
        )
    }
}

export default AcademicSelect