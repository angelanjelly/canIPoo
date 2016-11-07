import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

export default class CreateItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			error: null
		};
	}

	renderError() {
		if (!this.state.error) { return null; }
			return <div style={{ color: 'red', fontSize: 25, fontStyle: "georgia" }}>{this.state.error}</div>
		return;
	}

	render() {
		return (
			<form onSubmit={this.handleCreate.bind(this)}>
				<input type="text" style={{ width: 450, height: 34, fontSize: 15 }} placeholder="Which gym equipment are you waiting to use?" ref="createInput"/>
				<RaisedButton onClick={this.handleCreate.bind(this)}>Create</RaisedButton>
				{this.renderError()}
			</form>
		);
	}

	handleCreate(event) {
		event.preventDefault();

		const createInput = this.refs.createInput;
		const nickname = createInput.value;
		const validateInput = this.validateInput(nickname);
		if (validateInput) {
			this.setState({ error: validateInput});
			return;
		}

		this.setState({ error: null })
		this.props.createNickname(nickname);
		this.refs.createInput.value = "";
	}

    validateInput(nickname) {
        if (!nickname) {
            return 'Please enter a nickname.';
        } else if (_.find(this.props.todos, todo => todo.nickname === nickname)) {
            return 'Nickname already exists.';
        } else {
            return null;
        }
    }
}