import React from 'react';
import NewPlaylist from '../components/NewPlaylist';

class PlaylistContainer extends React.Component {
    constructor(){
        super();
        this.state = { input: '', btnDisabled: true, warningMsg: "" };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.setInput = this.setInput.bind(this);
    }

    onFormSubmit(input) {
        this.setState({ input: "" });
        console.log(this)
    }

    setInput(input) {
        return input.length > 0 && input.length < 16 ?
        this.setState({ btnDisabled: false, input: input, warningMsg: '' }) :
        this.setState({ btnDisabled: true, input: input, warningMsg: 'Please enter a name' })
    }

    render() {
        return(
            <NewPlaylist setInput={ this.setInput } onFormSubmit={ this.onFormSubmit } inputValue={ this.state.input } btnDisabled={ this.state.btnDisabled} warningMsg={this.state.warningMsg}/>
        )
    }
}

export default PlaylistContainer;
